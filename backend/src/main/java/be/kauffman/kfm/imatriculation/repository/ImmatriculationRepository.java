package be.kauffman.kfm.imatriculation.repository;

import be.kauffman.kfm.imatriculation.entity.Immatriculation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ImmatriculationRepository extends JpaRepository<Immatriculation, UUID> {
}
