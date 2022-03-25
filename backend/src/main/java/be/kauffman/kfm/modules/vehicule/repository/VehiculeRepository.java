package be.kauffman.kfm.modules.vehicule.repository;

import be.kauffman.kfm.modules.vehicule.entity.Vehicule;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface VehiculeRepository extends JpaRepository<Vehicule, UUID> {
}
