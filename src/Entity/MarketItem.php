<?php

namespace App\Entity;

use App\Repository\MarketItemRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Types\UuidType;
use Symfony\Component\Uid\Uuid;

#[ORM\Entity(repositoryClass: MarketItemRepository::class)]
class MarketItem
{
    #[ORM\Id]
    #[ORM\Column(type: UuidType::NAME, unique: true)]
    #[ORM\GeneratedValue(strategy: 'CUSTOM')]
    #[ORM\CustomIdGenerator(class: 'doctrine.uuid_generator')]
    private ?Uuid $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column]
    private ?float $position_x = null;

    #[ORM\Column]
    private ?float $position_y = null;

    #[ORM\Column(type: Types::ARRAY)]
    private array $appears_in = [];

    /*
     * 0: Winter
     * 1: Spring
     * 2: Summer
     * 3: Autumn
     */
    #[ORM\Column(nullable: true)]
    private ?int $season = null;

    public function getId(): Uuid
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getPositionX(): ?float
    {
        return $this->position_x;
    }

    public function setPositionX(float $position_x): static
    {
        $this->position_x = $position_x;

        return $this;
    }

    public function getPositionY(): ?float
    {
        return $this->position_y;
    }

    public function setPositionY(float $position_y): static
    {
        $this->position_y = $position_y;

        return $this;
    }

    public function getAppearsIn(): array
    {
        return $this->appears_in;
    }

    public function setAppearsIn(array $appears_in): static
    {
        $this->appears_in = $appears_in;

        return $this;
    }

    public function getSeason(): ?int
    {
        return $this->season;
    }

    public function setSeason(?int $season): static
    {
        $this->season = $season;

        return $this;
    }
}