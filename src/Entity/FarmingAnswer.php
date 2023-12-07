<?php

namespace App\Entity;

use App\Repository\FarmingAnswerRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Types\UuidType;
use Symfony\Component\Uid\Uuid;

#[ORM\Entity(repositoryClass: FarmingAnswerRepository::class)]
class FarmingAnswer
{
    #[ORM\Id]
    #[ORM\Column(type: UuidType::NAME, unique: true)]
    #[ORM\GeneratedValue(strategy: 'CUSTOM')]
    #[ORM\CustomIdGenerator(class: 'doctrine.uuid_generator')]
    private ?Uuid $uuid = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $answered_at = null;

    public function getUuid(): ?Uuid
    {
        return $this->uuid;
    }

    public function getAnsweredAt(): ?\DateTimeImmutable
    {
        return $this->answered_at;
    }

    public function setAnsweredAt(\DateTimeImmutable $answered_at): static
    {
        $this->answered_at = $answered_at;

        return $this;
    }
}
