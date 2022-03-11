package be.kauffman.kfm.vadr.repository;

import be.kauffman.kfm.vadr.entity.Vadr;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface VadrRepository extends JpaRepository<Vadr, UUID> {
}
