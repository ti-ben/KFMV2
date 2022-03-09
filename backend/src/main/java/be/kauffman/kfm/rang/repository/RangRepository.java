package be.kauffman.KFM.rang.repository;

import be.kauffman.KFM.rang.entity.Rang;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface RangRepository extends JpaRepository<Rang, UUID> {
}
