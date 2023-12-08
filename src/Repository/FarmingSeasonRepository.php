<?php

namespace App\Repository;

use App\Entity\FarmingSeason;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<FarmingSeason>
 *
 * @method FarmingSeason|null find($id, $lockMode = null, $lockVersion = null)
 * @method FarmingSeason|null findOneBy(array $criteria, array $orderBy = null)
 * @method FarmingSeason[]    findAll()
 * @method FarmingSeason[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FarmingSeasonRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, FarmingSeason::class);
    }

//    /**
//     * @return FarmingSeason[] Returns an array of FarmingSeason objects
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

//    public function findOneBySomeField($value): ?FarmingSeason
//    {
//        return $this->createQueryBuilder('f')
//            ->andWhere('f.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
