package be.kauffman.kfm.status.repository;

import be.kauffman.kfm.status.entity.dto.Status;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface StatusRepository extends JpaRepository<Status, UUID> {
}
