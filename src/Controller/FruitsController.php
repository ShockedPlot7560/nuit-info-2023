<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class FruitsController extends AbstractController
{
    #[Route('/fruits', name: 'app_fruits')]
    public function index(): Response
    {
        return $this->render('fruits/index.html.twig', [
            'controller_name' => 'FruitsController',
        ]);
    }
}
