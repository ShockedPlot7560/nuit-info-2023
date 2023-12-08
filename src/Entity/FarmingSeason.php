<?php

namespace App\Entity;

use App\Repository\FarmingSeasonRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Types\UuidType;
use Symfony\Component\Uid\Uuid;

#[ORM\Entity(repositoryClass: FarmingSeasonRepository::class)]
class FarmingSeason
{
    #[ORM\Id]
    #[ORM\Column(type: UuidType::NAME, unique: true)]
    #[ORM\GeneratedValue(strategy: 'CUSTOM')]
    #[ORM\CustomIdGenerator(class: 'doctrine.uuid_generator')]
    private ?Uuid $uuid = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $started_at = null;

    #[ORM\Column]
    private ?int $season = null;

    #[ORM\ManyToOne(inversedBy: 'farmingSeasons')]
    #[ORM\JoinColumn(nullable: false, referencedColumnName: 'uuid')]
    private ?FarmingState $state = null;

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $finished_at = null;

    public function getUuid(): ?Uuid
    {
        return $this->uuid;
    }

    public function getStartedAt(): ?\DateTimeImmutable
    {
        return $this->started_at;
    }

    public function setStartedAt(\DateTimeImmutable $started_at): static
    {
        $this->started_at = $started_at;

        return $this;
    }

    public function getSeason(): ?int
    {
        return $this->season;
    }

    public function setSeason(int $season): static
    {
        $this->season = $season;

        return $this;
    }

    public function getState(): ?FarmingState
    {
        return $this->state;
    }

    public function setState(?FarmingState $state): static
    {
        $this->state = $state;

        return $this;
    }

    public function getFinishedAt(): ?\DateTimeImmutable
    {
        return $this->finished_at;
    }

    public function setFinishedAt(?\DateTimeImmutable $finished_at): static
    {
        $this->finished_at = $finished_at;

        return $this;
    }
}
