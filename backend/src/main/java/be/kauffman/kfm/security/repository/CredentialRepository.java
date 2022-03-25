package be.kauffman.kfm.security.repository;

import be.kauffman.kfm.security.entity.Credential;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface CredentialRepository extends JpaRepository<Credential, UUID> {
    Credential findByUsername(String username);

    boolean existsByUsername(String username);
}
