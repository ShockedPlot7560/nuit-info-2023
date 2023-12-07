<?php

namespace App\Entity;

use App\Repository\FactoryRoundRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FactoryRoundRepository::class)]
class FactoryRound
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $item1 = null;

    #[ORM\Column(length: 255)]
    private ?string $item2 = null;

    #[ORM\Column]
    private ?int $winner = null;

    #[ORM\ManyToOne(inversedBy: 'factoryRounds')]
    #[ORM\JoinColumn(nullable: false)]
    private ?FactoryState $state = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getItem1(): ?string
    {
        return $this->item1;
    }

    public function setItem1(string $item1): static
    {
        $this->item1 = $item1;

        return $this;
    }

    public function getItem2(): ?string
    {
        return $this->item2;
    }

    public function setItem2(string $item2): static
    {
        $this->item2 = $item2;

        return $this;
    }

    public function getWinner(): ?int
    {
        return $this->winner;
    }

    public function setWinner(int $winner): static
    {
        $this->winner = $winner;

        return $this;
    }

    public function getState(): ?FactoryState
    {
        return $this->state;
    }

    public function setState(?FactoryState $state): static
    {
        $this->state = $state;

        return $this;
    }
}
