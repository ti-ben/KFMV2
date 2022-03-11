package be.kauffman.kfm.adresse.repository;

import be.kauffman.kfm.adresse.entity.Adresse;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface AdresseRepository extends JpaRepository<Adresse, UUID> {
}
