<?php

namespace App\Controller;

use App\Entity\HouseItem;
use App\Game\House\RoomFactory;
use App\Repository\HouseItemRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HouseController extends AbstractController
{
    public function __construct(
        private HouseItemRepository $houseItemRepository,
    )
    {
    }

    #[Route('/house', name: 'app_house')]
    public function index(Request $request): Response
    {
        $items= [];
        foreach ($this->houseItemRepository->findAll() as $item) {
            /** @var HouseItem $item */
            $items[$item->getRoom()][$item->getName()] = [
                "name" => $item->getName(),
                "details" => $item->getDetails(),
                "x" => $item->getPositionX(),
                "y" => $item->getPositionY()
            ];
        }
        return $this->render('house/index.html.twig', [
            'controller_name' => 'HouseController',
            'navigation' => array_merge(
                RoomFactory::toJson(),
                [
                    "items" => $items
                ]
            ),
            'room' => 'house'
        ]);
    }
}
