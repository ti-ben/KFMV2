package be.kauffman.kfm.grade.repository;

import be.kauffman.kfm.grade.entity.dto.Grade;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface GradeRepository extends JpaRepository<Grade, UUID> {
}
