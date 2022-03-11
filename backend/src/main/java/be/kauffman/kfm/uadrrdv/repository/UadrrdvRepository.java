package be.kauffman.kfm.uadrrdv.repository;

import be.kauffman.kfm.uadrrdv.entity.Uadrrdv;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UadrrdvRepository extends JpaRepository<Uadrrdv, UUID> {
}
