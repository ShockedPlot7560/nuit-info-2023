<?php

namespace App\Controller;

use App\Game\House\RoomFactory;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HouseController extends AbstractController
{
    #[Route('/house', name: 'app_house')]
    public function index(): Response
    {
        return $this->render('house/index.html.twig', [
            'controller_name' => 'HouseController',
            'navigation' => RoomFactory::toJson()
        ]);
    }
}
