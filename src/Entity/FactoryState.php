<?php

namespace App\Entity;

use App\Repository\FactoryStateRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FactoryStateRepository::class)]
class FactoryState
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $started_at = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $ended_at = null;

    #[ORM\OneToMany(mappedBy: 'state', targetEntity: FactoryRound::class)]
    private Collection $factoryRounds;

    public function __construct()
    {
        $this->factoryRounds = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getEndedAt(): ?\DateTimeImmutable
    {
        return $this->ended_at;
    }

    public function setEndedAt(\DateTimeImmutable $ended_at): static
    {
        $this->ended_at = $ended_at;

        return $this;
    }

    /**
     * @return Collection<int, FactoryRound>
     */
    public function getFactoryRounds(): Collection
    {
        return $this->factoryRounds;
    }

    public function addFactoryRound(FactoryRound $factoryRound): static
    {
        if (!$this->factoryRounds->contains($factoryRound)) {
            $this->factoryRounds->add($factoryRound);
            $factoryRound->setState($this);
        }

        return $this;
    }

    public function removeFactoryRound(FactoryRound $factoryRound): static
    {
        if ($this->factoryRounds->removeElement($factoryRound)) {
            // set the owning side to null (unless already changed)
            if ($factoryRound->getState() === $this) {
                $factoryRound->setState(null);
            }
        }

        return $this;
    }
}
