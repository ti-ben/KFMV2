package be.kauffman.kfm.modules.grade.repository;

import be.kauffman.kfm.modules.grade.entity.dto.Grade;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface GradeRepository extends JpaRepository<Grade, UUID> {
}
