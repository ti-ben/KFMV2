package be.kauffman.kfm.modules.prestataire.repository;

import be.kauffman.kfm.modules.prestataire.entity.dto.Prestataire;
import be.kauffman.kfm.modules.vehicule.entity.dto.Vehicule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface PrestataireRepository extends JpaRepository<Prestataire, UUID> {
    @Query("SELECT p FROM Prestataire p WHERE p.name LIKE %?1%")
    public List<Prestataire> search(String keyword);
}
