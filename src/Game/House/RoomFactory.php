<?php

namespace App\Game\House;

use App\Game\House\RoomIds as Ids;

class RoomFactory
{
    private static $instance = null;
    /**
     * @var array<string, Room>
     */
    private array $rooms = [];
    public static function getInstance() : RoomFactory{
        if(self::$instance === null){
            self::$instance = new RoomFactory();
        }
        return self::$instance;
    }

    private static function setup() : void{
        self::register(new Room(
            Ids::GARAGE, [
                Direction::EAST->value => Ids::OUTSIDE,
                Direction::SOUTH->value => Ids::KITCHEN
            ]
        ));
        self::register(new Room(
            Ids::OUTSIDE, [
                Direction::WEST->value => Ids::GARAGE,
                Direction::SOUTH->value => Ids::LIVINGROOM
            ]
        ));
        self::register(new Room(
            Ids::LIVINGROOM, [
                Direction::NORTH->value => Ids::OUTSIDE,
                Direction::WEST->value => Ids::KITCHEN,
                Direction::SOUTH->value => Ids::BEDROOM
            ]
        ));
        self::register(new Room(
            Ids::KITCHEN, [
                Direction::NORTH->value => Ids::GARAGE,
                Direction::EAST->value => Ids::LIVINGROOM
            ]
        ));
        self::register(new Room(
            Ids::BEDROOM, [
                Direction::NORTH->value => Ids::LIVINGROOM,
                Direction::EAST->value => Ids::BATHROOM
            ]
        ));
        self::register(new Room(
            Ids::BATHROOM, [
                Direction::WEST->value => Ids::BEDROOM
            ]
        ));
    }

    private static function register(Room $room) : void {
        self::getInstance()->rooms[$room->getId()] = $room;
    }

    public static function toJson() : array {
        if(self::$instance === null){
            self::setup();
        }
        $rooms = [];
        foreach(self::getInstance()->rooms as $room){
            $rooms[$room->getId()] = $room->jsonSerialize();
        }
        return $rooms;
    }
}