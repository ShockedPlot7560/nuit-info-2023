<?php

namespace App\Entity;

use App\Repository\FarmingStateRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Types\UuidType;
use Symfony\Component\Uid\Uuid;

#[ORM\Entity(repositoryClass: FarmingStateRepository::class)]
class FarmingState
{
    #[ORM\Id]
    #[ORM\Column(type: UuidType::NAME, unique: true)]
    #[ORM\GeneratedValue(strategy: 'CUSTOM')]
    #[ORM\CustomIdGenerator(class: 'doctrine.uuid_generator')]
    private ?Uuid $uuid = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $started�_at = null;

    #[ORM\OneToOne(inversedBy: 'farmingState', cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false, referencedColumnName: 'uuid')]
    private ?User $user = null;

    #[ORM\OneToMany(mappedBy: 'state', targetEntity: FarmingSeason::class)]
    private Collection $farmingSeasons;

    public function __construct()
    {
        $this->farmingSeasons = new ArrayCollection();
    }

    public function getUuid(): ?Uuid
    {
        return $this->uuid;
    }

    public function getStarted�At(): ?\DateTimeImmutable
    {
        return $this->started�_at;
    }

    public function setStarted�At(\DateTimeImmutable $started�_at): static
    {
        $this->started�_at = $started�_at;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(User $user): static
    {
        $this->user = $user;

        return $this;
    }

    /**
     * @return Collection<int, FarmingSeason>
     */
    public function getFarmingSeasons(): Collection
    {
        return $this->farmingSeasons;
    }

    public function addFarmingSeason(FarmingSeason $farmingSeason): static
    {
        if (!$this->farmingSeasons->contains($farmingSeason)) {
            $this->farmingSeasons->add($farmingSeason);
            $farmingSeason->setState($this);
        }

        return $this;
    }

    public function removeFarmingSeason(FarmingSeason $farmingSeason): static
    {
        if ($this->farmingSeasons->removeElement($farmingSeason)) {
            // set the owning side to null (unless already changed)
            if ($farmingSeason->getState() === $this) {
                $farmingSeason->setState(null);
            }
        }

        return $this;
    }
}
