package be.kauffman.kfm.vmetrologie.repository;

import be.kauffman.kfm.vmetrologie.entity.Vmetrologie;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface VmetrologieRepository extends JpaRepository<Vmetrologie, UUID> {
}