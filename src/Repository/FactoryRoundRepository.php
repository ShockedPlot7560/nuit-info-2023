<?php

namespace App\Repository;

use App\Entity\FactoryRound;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<FactoryRound>
 *
 * @method FactoryRound|null find($id, $lockMode = null, $lockVersion = null)
 * @method FactoryRound|null findOneBy(array $criteria, array $orderBy = null)
 * @method FactoryRound[]    findAll()
 * @method FactoryRound[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FactoryRoundRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, FactoryRound::class);
    }

//    /**
//     * @return FactoryRound[] Returns an array of FactoryRound objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('f')
//            ->andWhere('f.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('f.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?FactoryRound
//    {
//        return $this->createQueryBuilder('f')
//            ->andWhere('f.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
