package be.kauffman.kfm.uselectmedrdv.repository;

import be.kauffman.kfm.uselectmedrdv.entity.Uselectmedrdv;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UselectmedrdvRepository extends JpaRepository<Uselectmedrdv, UUID> {
}
