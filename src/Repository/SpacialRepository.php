<?php

namespace App\Repository;

use App\Entity\Spacial;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Spacial>
 *
 * @method Spacial|null find($id, $lockMode = null, $lockVersion = null)
 * @method Spacial|null findOneBy(array $criteria, array $orderBy = null)
 * @method Spacial[]    findAll()
 * @method Spacial[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SpacialRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Spacial::class);
    }

//    /**
//     * @return Spacial[] Returns an array of Spacial objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('s')
//            ->andWhere('s.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('s.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Spacial
//    {
//        return $this->createQueryBuilder('s')
//            ->andWhere('s.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
