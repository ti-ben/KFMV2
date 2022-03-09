package be.kauffman.KFM.vmetrologie.repository;

import be.kauffman.KFM.vmetrologie.entity.Vmetrologie;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface VmetrologieRepository extends JpaRepository<Vmetrologie, UUID> {
}
