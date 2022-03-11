package be.kauffman.kfm.uadrperiode.repository;

import be.kauffman.kfm.uadrperiode.entity.Uadrperiode;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UadrperiodeRepository extends JpaRepository<Uadrperiode, UUID> {
}
