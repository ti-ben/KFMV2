package be.kauffman.kfm.numberplate.repository;

import be.kauffman.kfm.numberplate.entity.dto.Numberplate;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface NumberplateRepository extends JpaRepository<Numberplate, UUID> {
}
