package be.kauffman.kfm.address.repository;

import be.kauffman.kfm.address.entity.Adresse;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface AdresseRepository extends JpaRepository<Adresse, UUID> {
}
