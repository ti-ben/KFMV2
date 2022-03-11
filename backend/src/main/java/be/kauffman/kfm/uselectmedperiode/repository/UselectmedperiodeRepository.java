package be.kauffman.kfm.uselectmedperiode.repository;

import be.kauffman.kfm.uselectmedperiode.entity.Uselectmedperiode;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UselectmedperiodeRepository extends JpaRepository<Uselectmedperiode, UUID> {
}
