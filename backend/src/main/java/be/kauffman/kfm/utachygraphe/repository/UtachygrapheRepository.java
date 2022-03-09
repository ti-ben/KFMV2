package be.kauffman.KFM.utachygraphe.repository;

import be.kauffman.KFM.utachygraphe.entity.Utachygraphe;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UtachygrapheRepository extends JpaRepository<Utachygraphe, UUID> {
}
