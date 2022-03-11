package be.kauffman.kfm.immatriculation.repository;

import be.kauffman.kfm.immatriculation.entity.Immatriculation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImmatriculationRepository extends JpaRepository<Immatriculation, Integer> {
}
