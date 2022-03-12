package be.kauffman.kfm.metrologie.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import be.kauffman.KFM.metrologie.entity.dto.Metrologie;

import java.util.UUID;

public interface MetrologieRepository extends JpaRepository<Metrologie, UUID> {
}
