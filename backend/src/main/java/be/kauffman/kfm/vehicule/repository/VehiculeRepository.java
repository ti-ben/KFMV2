package be.kauffman.KFM.vehicule.repository;

import be.kauffman.KFM.vehicule.entity.Vehicule;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface VehiculeRepository extends JpaRepository<Vehicule, UUID> {
}
