<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;

class IndexController extends AbstractController
{
    public function __construct(
        private TokenStorageInterface $tokenStorage,
    )
    {
    }

    #[Route('/index', name: 'app_index')]
    public function index(Request $request): Response
    {
        return $this->render('index/index.html.twig', [
            'controller_name' => 'IndexController',
            'number' => 10,
        ]);
    }
}
