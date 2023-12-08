<?php

namespace App\Command;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(
    name: 'house-item-import',
    description: 'Add a short description for your command',
)]
class HouseItemImportCommand extends Command
{
    public function __construct(
        private EntityManagerInterface $em
    )
    {
        parent::__construct();
    }

    protected function configure(): void
    {
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $data = array(
            array(
                'name'                  => 'car_charger',
                'is_energy_consuming'   => true,
                'position_x'            => 0,
                'position_y'            => 0,
                'details'               => '',
                'room'                  => 'garage'
            ),
            array(
                'name'                  => 'dryer',
                'is_energy_consuming'   => true,
                'position_x'            => 0,
                'position_y'            => 0,
                'details'               => '',
                'room'                  => 'garage'
            ),
            array(
                'name'                  => 'wine_cellar',
                'is_energy_consuming'   => true,
                'position_x'            => 0,
                'position_y'            => 0,
                'details'               => '',
                'room'                  => 'garage'
            ),
            array(
                'name'                  => 'jacuzzi',
                'is_energy_consuming'   => true,
                'position_x'            => 0,
                'position_y'            => 0,
                'details'               => '',
                'room'                  => 'outside'
            ),
            array(
                'name'                  => 'electric_lawnmower',
                'is_energy_consuming'   => false,
                'position_x'            => 0,
                'position_y'            => 0,
                'details'               => '',
                'room'                  => 'outside'
            ),
            array(
                'name'                  => 'heat_pump',
                'is_energy_consuming'   => false,
                'position_x'            => 0,
                'position_y'            => 0,
                'details'               => '',
                'room'                  => 'outside'
            ),
            array(
                'name'                  => 'high_tech_tv',
                'is_energy_consuming'   => true,
                'position_x'            => 0,
                'position_y'            => 0,
                'details'               => '',
                'room'                  => 'livingroom'
            ),
            array(
                'name'                  => 'led_lamp',
                'is_energy_consuming'   => false,
                'position_x'            => 0,
                'position_y'            => 0,
                'details'               => '',
                'room'                  => 'livingroom'
            ),
            array(
                'name'                  => 'tablet',
                'is_energy_consuming'   => false,
                'position_x'            => 0,
                'position_y'            => 0,
                'details'               => '',
                'room'                  => 'livingroom'
            ),
            array(
                'name'                  => 'ps5',
                'is_energy_consuming'   => false,
                'position_x'            => 0,
                'position_y'            => 0,
                'details'               => '',
                'room'                  => 'livingroom'
            ),
            array(
                'name'                  => 'halogen_bedside_lamp',
                'is_energy_consuming'   => true,
                'position_x'            => 0,
                'position_y'            => 0,
                'details'               => '',
                'room'                  => 'bedroom'
            ),
            array(
                'name'                  => 'gaming_pc',
                'is_energy_consuming'   => true,
                'position_x'            => 0,
                'position_y'            => 0,
                'details'               => '',
                'room'                  => 'bedroom'
            ),
            array(
                'name'                  => 'smartphone',
                'is_energy_consuming'   => false,
                'position_x'            => 0,
                'position_y'            => 0,
                'details'               => '',
                'room'                  => 'bedroom'
            ),
            array(
                'name'                  => 'electric_radiator',
                'is_energy_consuming'   => true,
                'position_x'            => 0,
                'position_y'            => 0,
                'details'               => '',
                'room'                  => 'bathroom'
            ),
            array(
                'name'                  => 'electric_shaver',
                'is_energy_consuming'   => false,
                'position_x'            => 0,
                'position_y'            => 0,
                'details'               => '',
                'room'                  => 'bathroom'
            ),
            array(
                'name'                  => 'electric_toothbrush',
                'is_energy_consuming'   => false,
                'position_x'            => 0,
                'position_y'            => 0,
                'details'               => '',
                'room'                  => 'bathroom'
            ),
            array(
                'name'                  => 'induction_plate',
                'is_energy_consuming'   => true,
                'position_x'            => 0,
                'position_y'            => 0,
                'details'               => '',
                'room'                  => 'kitchen'
            ),
            array(
                'name'                  => 'old_oven',
                'is_energy_consuming'   => true,
                'position_x'            => 0,
                'position_y'            => 0,
                'details'               => '',
                'room'                  => 'kitchen'
            ),
            array(
                'name'                  => 'extractor_hood',
                'is_energy_consuming'   => false,
                'position_x'            => 0,
                'position_y'            => 0,
                'details'               => '',
                'room'                  => 'kitchen'
            ),
            array(
                'name'                  => 'food_processor',
                'is_energy_consuming'   => false,
                'position_x'            => 0,
                'position_y'            => 0,
                'details'               => '',
                'room'                  => 'kitchen'
            )
        );

        foreach($data as $item) {
            $houseItem = new \App\Entity\HouseItem();
            $houseItem->setName($item['name']);
            $houseItem->setIsEnergyConsuming($item['is_energy_consuming']);
            $houseItem->setPositionX($item['position_x']);
            $houseItem->setPositionY($item['position_y']);
            $houseItem->setDetails($item['details']);
            $houseItem->setRoom($item['room']);

            $this->em->persist($houseItem);
        }

        $this->em->flush();

        return Command::SUCCESS;
    }
}