package be.kauffman.kfm.ucaprdv.repository;

import be.kauffman.kfm.ucaprdv.entity.Ucaprdv;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UcaprdvRepository extends JpaRepository<Ucaprdv, UUID> {
}
