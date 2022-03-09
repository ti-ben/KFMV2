package be.kauffman.KFM.uadrrdv.repository;

import be.kauffman.KFM.uadrrdv.entity.Uadrrdv;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UadrrdvRepository extends JpaRepository<Uadrrdv, UUID> {
}
