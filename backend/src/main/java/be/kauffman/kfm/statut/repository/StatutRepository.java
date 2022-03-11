package be.kauffman.kfm.statut.repository;

import be.kauffman.kfm.statut.entity.Statut;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface StatutRepository extends JpaRepository<Statut, UUID> {
}
