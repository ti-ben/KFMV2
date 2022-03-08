package be.kauffman.KFM.immatriculation.repository;

import be.kauffman.KFM.immatriculation.entity.Immatriculation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImmatriculationRepository extends JpaRepository<Immatriculation, Integer> {
}
