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

class PlayerApiController extends AbstractController
{
    public function __construct(
        private UserRepository $userRepository,
        private EntityManagerInterface $em
    )
    {
    }

    #[Route('/api/player/create', name: 'app_player_api', methods: ['POST'])]
    public function create(TokenStorageInterface $ts, Request $request): Response
    {
        /** @var User $currentUser */
        $currentUser = $ts->getToken()->getUser();
        $body = json_decode($request->getContent(), true);
        $playerName = $body['name'];
        if ( strlen($playerName) < 0 || strlen($playerName) > 20) {
            return $this->json(['error' => 'Invalid name'], Response::HTTP_BAD_REQUEST);
        }
        $user = $this->userRepository->findOneBy(['name' => $playerName]);
        if ($user) {
            return $this->json(['error' => 'Name already taken'], Response::HTTP_BAD_REQUEST);
        }
        $playerAvatar = $body['avatar'];
        if($playerAvatar < 0 || $playerAvatar > 5) {
            return $this->json(['error' => 'Invalid avatar'], Response::HTTP_BAD_REQUEST);
        }
        $playerColor = $body['color'];

        $currentUser->setName($playerName);
        $currentUser->setAvatar($playerAvatar);
        $currentUser->setHairColor($playerColor);
        $this->em->flush();

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
