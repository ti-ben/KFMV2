package be.kauffman.kfm.modules.period.repository;

import be.kauffman.kfm.modules.period.entity.dto.Period;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface PeriodRepository extends JpaRepository<Period, UUID> {
}
