package be.kauffman.KFM.vadr.repository;

import be.kauffman.KFM.vadr.entity.Vadr;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface VadrRepository extends JpaRepository<Vadr, UUID> {
}
