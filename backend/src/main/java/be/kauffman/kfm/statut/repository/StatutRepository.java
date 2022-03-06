package be.kauffman.KFM.statut.repository;

import be.kauffman.KFM.statut.entity.Statut;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface StatutRepository extends JpaRepository<Statut, UUID> {
}
