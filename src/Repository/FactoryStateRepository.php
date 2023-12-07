<?php

namespace App\Repository;

use App\Entity\FactoryState;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<FactoryState>
 *
 * @method FactoryState|null find($id, $lockMode = null, $lockVersion = null)
 * @method FactoryState|null findOneBy(array $criteria, array $orderBy = null)
 * @method FactoryState[]    findAll()
 * @method FactoryState[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FactoryStateRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, FactoryState::class);
    }

//    /**
//     * @return FactoryState[] Returns an array of FactoryState objects
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

//    public function findOneBySomeField($value): ?FactoryState
//    {
//        return $this->createQueryBuilder('f')
//            ->andWhere('f.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
