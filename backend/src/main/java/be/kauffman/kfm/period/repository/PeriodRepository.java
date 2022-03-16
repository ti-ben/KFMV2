package be.kauffman.kfm.period.repository;

import be.kauffman.kfm.period.entity.dto.Period;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface PeriodRepository extends JpaRepository<Period, UUID> {
}
