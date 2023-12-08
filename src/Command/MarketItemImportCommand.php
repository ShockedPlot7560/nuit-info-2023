<?php

namespace App\Command;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(
    name: 'market-item-import',
    description: 'Add a short description for your command',
)]
class MarketItemImportCommand extends Command
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
                'name'                  => 'apple',
                'position_x'            => 0,
                'position_y'            => 0,
                'appears_in'            => [3],
                'season'                => 3
            ),
            array(
                'name'                  => 'lemon',
                'position_x'            => 0,
                'position_y'            => 0,
                'appears_in'            => [0],
                'season'                => 0
            ),
            array(
                'name'                  => 'peach',
                'position_x'            => 0,
                'position_y'            => 0,
                'appears_in'            => [0],
                'season'                => null
            ),
            array(
                'name'                  => 'pear',
                'position_x'            => 0,
                'position_y'            => 0,
                'appears_in'            => [1, 3],
                'season'                => 1
            ),
            array(
                'name'                  => 'strawberry',
                'position_x'            => 0,
                'position_y'            => 0,
                'appears_in'            => [2],
                'season'                => 2
            ),
            array(
                'name'                  => 'artichoke',
                'position_x'            => 0,
                'position_y'            => 0,
                'appears_in'            => [1],
                'season'                => null
            ),
            array(
                'name'                  => 'carrot',
                'position_x'            => 0,
                'position_y'            => 0,
                'appears_in'            => [1],
                'season'                => 1
            ),
            array(
                'name'                  => 'eggplant',
                'position_x'            => 0,
                'position_y'            => 0,
                'appears_in'            => [1],
                'season'                => null
            ),
            array(
                'name'                  => 'olive',
                'position_x'            => 0,
                'position_y'            => 0,
                'appears_in'            => [0, 2],
                'season'                => null
            ),
            array(
                'name'                  => 'onion',
                'position_x'            => 0,
                'position_y'            => 0,
                'appears_in'            => [3],
                'season'                => null
            ),
            array(
                'name'                  => 'pepper',
                'position_x'            => 0,
                'position_y'            => 0,
                'appears_in'            => [0, 2],
                'season'                => 2
            ),
            array(
                'name'                  => 'potato',
                'position_x'            => 0,
                'position_y'            => 0,
                'appears_in'            => [1, 3],
                'season'                => 1
            ),
            array(
                'name'                  => 'pumpkin',
                'position_x'            => 0,
                'position_y'            => 0,
                'appears_in'            => [2, 3],
                'season'                => 2
            ),
            array(
                'name'                  => 'radish',
                'position_x'            => 0,
                'position_y'            => 0,
                'appears_in'            => [0],
                'season'                => 0
            ),
            array(
                'name'                  => 'tomato',
                'position_x'            => 0,
                'position_y'            => 0,
                'appears_in'            => [1, 2],
                'season'                => 2
            ),
            array(
                'name'                  => 'watermelon',
                'position_x'            => 0,
                'position_y'            => 0,
                'appears_in'            => [0],
                'season'                => null
            )
        );

        foreach($data as $item) {
            $marketItem = new \App\Entity\MarketItem();
            $marketItem->setName($item['name']);
            $marketItem->setPositionX($item['position_x']);
            $marketItem->setPositionY($item['position_y']);
            $marketItem->setAppearsIn($item['appears_in']);
            $marketItem->setSeason($item['season']);

            $this->em->persist($marketItem);
        }

        $this->em->flush();

        return Command::SUCCESS;
    }
}