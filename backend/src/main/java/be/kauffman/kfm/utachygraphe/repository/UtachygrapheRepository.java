package be.kauffman.kfm.utachygraphe.repository;

import be.kauffman.kfm.utachygraphe.entity.Utachygraphe;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UtachygrapheRepository extends JpaRepository<Utachygraphe, UUID> {
}
