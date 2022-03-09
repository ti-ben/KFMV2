package be.kauffman.KFM.ucapperiode.repository;

import be.kauffman.KFM.ucapperiode.entity.Ucapperiode;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UcapperiodeRepository extends JpaRepository<Ucapperiode, UUID> {
}
