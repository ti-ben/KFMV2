package be.kauffman.KFM.uselectmedperiode.repository;

import be.kauffman.KFM.uselectmedperiode.entity.Uselectmedperiode;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UselectmedperiodeRepository extends JpaRepository<Uselectmedperiode, UUID> {
}
