<?php

namespace App\Game\House;

class Room implements \JsonSerializable
{
    public function __construct(
        private string $id,
        private array $nextRooms = [],
        private array $items = []
    ) { }

    public function getId() : string
    {
        return $this->id;
    }

    /**
     * @return array<int, string>
     */
    public function getNextRooms() : array
    {
        return $this->nextRooms;
    }

    public function getItems() : array
    {
        return $this->items;
    }

    public function jsonSerialize(): mixed
    {
        $neighbours = [];
        foreach (Direction::cases() as $direction) {
            $neighbours[$direction->value - 1] = $this->nextRooms[$direction->value] ?? null;
        }

        return [
            "id" => $this->id,
            "neighbours" => $neighbours
        ];
    }
}