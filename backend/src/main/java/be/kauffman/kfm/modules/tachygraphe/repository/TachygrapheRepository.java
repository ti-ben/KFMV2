package be.kauffman.kfm.utachygraphe.repository;

import be.kauffman.kfm.modules.tachygraphe.entity.dto.Tachygraphe;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface TachygrapheRepository extends JpaRepository<Tachygraphe, UUID> {
}
