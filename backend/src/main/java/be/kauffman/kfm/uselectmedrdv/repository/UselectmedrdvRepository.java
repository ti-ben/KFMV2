package be.kauffman.KFM.uselectmedrdv.repository;

import be.kauffman.KFM.uselectmedrdv.entity.Uselectmedrdv;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UselectmedrdvRepository extends JpaRepository<Uselectmedrdv, UUID> {
}
