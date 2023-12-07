<?php

namespace App\Repository;

use App\Entity\FarmingAnswer;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<FarmingAnswer>
 *
 * @method FarmingAnswer|null find($id, $lockMode = null, $lockVersion = null)
 * @method FarmingAnswer|null findOneBy(array $criteria, array $orderBy = null)
 * @method FarmingAnswer[]    findAll()
 * @method FarmingAnswer[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FarmingAnswerRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, FarmingAnswer::class);
    }

//    /**
//     * @return FarmingAnswer[] Returns an array of FarmingAnswer objects
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

//    public function findOneBySomeField($value): ?FarmingAnswer
//    {
//        return $this->createQueryBuilder('f')
//            ->andWhere('f.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
