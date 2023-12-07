<?php

namespace App\Security;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Http\Authenticator\AbstractAuthenticator;
use Symfony\Component\Security\Http\Authenticator\Passport\Badge\UserBadge;
use Symfony\Component\Security\Http\Authenticator\Passport\Passport;
use Symfony\Component\Security\Http\Authenticator\Passport\SelfValidatingPassport;

class CreateUserAuthenticator extends AbstractAuthenticator
{
    public function __construct(
        private EntityManagerInterface $em
    )
    {
    }

    public function supports(Request $request): ?bool
    {
        return true;
    }

    public function authenticate(Request $request): Passport
    {
        $userId = $request->getSession()->get('user_id');
        if($userId === null){
            $user = $this->createUser($request);
        }else{
            $user = $this->em->getRepository(User::class)->find($userId);
            if($user === null){
                $user = $this->createUser($request);
            }
        }

        return new SelfValidatingPassport(new UserBadge($user->getUserIdentifier()));
    }

    private function createUser(Request $request) : User {
        $user = new User();
        $this->em->persist($user);
        $this->em->flush();
        $this->em->refresh($user);

        $request->getSession()->set('user_id', $user->getUuid());
        return $user;
    }

    public function onAuthenticationFailure(Request $request, AuthenticationException $exception): ?Response
    {
        return new Response(status: Response::HTTP_FORBIDDEN);
    }

    public function onAuthenticationSuccess(Request $request, TokenInterface $token, string $firewallName): ?Response
    {
        return null;
    }
}