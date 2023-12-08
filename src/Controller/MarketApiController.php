<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;

class MarketApiController extends AbstractController
{
    public function __construct(
        private UserRepository $userRepository,
        private EntityManagerInterface $em
    )
    {
    }

    #[Route('/api/market/answer', name: 'app_market_answer_api', methods: ['POST'])]
    public function create(TokenStorageInterface $ts, Request $request): Response
    {
        $body = json_decode($request->getContent(), true);



        return $this->json(['success' => 'Player updated'], Response::HTTP_OK);
    }

    #[Route('/api/player/special', name: 'app_player_special_api')]
    public function special(TokenStorageInterface $ts) : Response {
        /** @var User $currentUser */
        $currentUser = $ts->getToken()->getUser();
        $currentUser->setSpecial(true);
        $this->em->flush();
        return $this->json(['success' => 'Player updated'], Response::HTTP_OK);
    }
}