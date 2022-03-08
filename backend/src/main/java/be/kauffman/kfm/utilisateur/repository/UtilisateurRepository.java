package be.kauffman.KFM.utilisateur.repository;

import be.kauffman.KFM.utilisateur.entity.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UtilisateurRepository extends JpaRepository<Utilisateur, UUID> {
}
