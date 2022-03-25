package be.kauffman.kfm.modules.prestataire.repository;

import be.kauffman.kfm.modules.prestataire.entity.dto.Prestataire;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface PrestataireRepository extends JpaRepository<Prestataire, UUID> {
}
