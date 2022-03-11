package be.kauffman.kfm.rang.repository;

import be.kauffman.kfm.rang.entity.Rang;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface RangRepository extends JpaRepository<Rang, UUID> {
}
