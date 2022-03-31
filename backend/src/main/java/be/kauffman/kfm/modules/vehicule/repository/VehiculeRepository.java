package be.kauffman.kfm.modules.vehicule.repository;

import be.kauffman.kfm.modules.user.entity.dto.User;
import be.kauffman.kfm.modules.vehicule.entity.Vehicule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface VehiculeRepository extends JpaRepository<Vehicule, UUID> {
    @Query("SELECT v FROM Vehicule v WHERE v.brand LIKE %?1%"
            + " OR v.num_chassis LIKE %?1%"
            )
    public List<Vehicule> search(String keyword);
}
