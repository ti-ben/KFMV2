package be.kauffman.KFM.adresse.repository;

import be.kauffman.KFM.adresse.entity.Adresse;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface AdresseRepository extends JpaRepository<Adresse, UUID> {
}
