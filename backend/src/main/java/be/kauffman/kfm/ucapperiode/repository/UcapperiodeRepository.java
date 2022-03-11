package be.kauffman.kfm.ucapperiode.repository;

import be.kauffman.kfm.ucapperiode.entity.Ucapperiode;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UcapperiodeRepository extends JpaRepository<Ucapperiode, UUID> {
}
