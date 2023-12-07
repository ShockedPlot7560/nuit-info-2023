<?php

namespace App\Repository;

use App\Entity\MarketItem;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<MarketItem>
 *
 * @method MarketItem|null find($id, $lockMode = null, $lockVersion = null)
 * @method MarketItem|null findOneBy(array $criteria, array $orderBy = null)
 * @method MarketItem[]    findAll()
 * @method MarketItem[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MarketItemRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, MarketItem::class);
    }

//    /**
//     * @return MarketItem[] Returns an array of MarketItem objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('m')
//            ->andWhere('m.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('m.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?MarketItem
//    {
//        return $this->createQueryBuilder('m')
//            ->andWhere('m.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
