<?php

namespace App\Repository;

use App\Entity\HouseItem;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<HouseItem>
 *
 * @method HouseItem|null find($id, $lockMode = null, $lockVersion = null)
 * @method HouseItem|null findOneBy(array $criteria, array $orderBy = null)
 * @method HouseItem[]    findAll()
 * @method HouseItem[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class HouseItemRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, HouseItem::class);
    }

//    /**
//     * @return HouseItem[] Returns an array of HouseItem objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('h')
//            ->andWhere('h.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('h.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?HouseItem
//    {
//        return $this->createQueryBuilder('h')
//            ->andWhere('h.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}