<?php

namespace App\Repository;

use App\Entity\FarmingState;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<FarmingState>
 *
 * @method FarmingState|null find($id, $lockMode = null, $lockVersion = null)
 * @method FarmingState|null findOneBy(array $criteria, array $orderBy = null)
 * @method FarmingState[]    findAll()
 * @method FarmingState[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FarmingStateRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, FarmingState::class);
    }

//    /**
//     * @return FarmingState[] Returns an array of FarmingState objects
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

//    public function findOneBySomeField($value): ?FarmingState
//    {
//        return $this->createQueryBuilder('f')
//            ->andWhere('f.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
