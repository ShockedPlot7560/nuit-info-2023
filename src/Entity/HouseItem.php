<?php

namespace App\Entity;

use App\Repository\HouseItemRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Types\UuidType;
use Symfony\Component\Uid\Uuid;

#[ORM\Entity(repositoryClass: HouseItemRepository::class)]
class HouseItem
{
    #[ORM\Id]
    #[ORM\Column(type: UuidType::NAME, unique: true)]
    #[ORM\GeneratedValue(strategy: 'CUSTOM')]
    #[ORM\CustomIdGenerator(class: 'doctrine.uuid_generator')]
    private ?Uuid $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column]
    private ?bool $is_energy_consuming = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $details = null;

    #[ORM\Column(length: 255)]
    private ?string $room = null;

    #[ORM\Column]
    private ?float $position_x = null;

    #[ORM\Column]
    private ?float $position_y = null;

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

    public function isIsEnergyConsuming(): ?bool
    {
        return $this->is_energy_consuming;
    }

    public function setIsEnergyConsuming(bool $is_energy_consuming): static
    {
        $this->is_energy_consuming = $is_energy_consuming;

        return $this;
    }

    public function getDetails(): ?string
    {
        return $this->details;
    }

    public function setDetails(?string $details): static
    {
        $this->details = $details;

        return $this;
    }

    public function getRoom(): ?string
    {
        return $this->room;
    }

    public function setRoom(string $room): static
    {
        $this->room = $room;

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
}