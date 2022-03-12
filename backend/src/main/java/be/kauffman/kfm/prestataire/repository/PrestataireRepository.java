package be.kauffman.KFM.prestataire.repository;

import be.kauffman.KFM.prestataire.entity.dto.Prestataire;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface PrestataireRepository extends JpaRepository<Prestataire, UUID> {
}
