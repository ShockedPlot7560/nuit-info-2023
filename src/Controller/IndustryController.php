<?php

namespace App\Controller;

use App\Game\House\RoomFactory;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class IndustryController extends AbstractController
{
    #[Route('/industry', name: 'app_industry')]
    public function index(): Response
    {
        return $this->render('industry/index.html.twig', [
            'controller_name' => 'IndustryController',
        ]);
    }
}