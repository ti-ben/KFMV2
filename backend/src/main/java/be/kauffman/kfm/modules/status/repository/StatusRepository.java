package be.kauffman.kfm.modules.status.repository;

import be.kauffman.kfm.modules.status.entity.dto.Status;
import be.kauffman.kfm.modules.vehicule.entity.dto.Vehicule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface StatusRepository extends JpaRepository<Status, UUID> {
    @Query("SELECT s FROM Status s WHERE s.name LIKE %?1%"
    )
    public List<Status> search(String keyword);
}
