package be.kauffman.KFM.ucaprdv.repository;

import be.kauffman.KFM.ucaprdv.entity.Ucaprdv;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UcaprdvRepository extends JpaRepository<Ucaprdv, UUID> {
}
