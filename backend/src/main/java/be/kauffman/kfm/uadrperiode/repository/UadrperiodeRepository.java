package be.kauffman.KFM.uadrperiode.repository;

import be.kauffman.KFM.uadrperiode.entity.Uadrperiode;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UadrperiodeRepository extends JpaRepository<Uadrperiode, UUID> {
}
