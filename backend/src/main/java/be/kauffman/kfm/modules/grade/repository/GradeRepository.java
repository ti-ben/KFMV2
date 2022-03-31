package be.kauffman.kfm.modules.grade.repository;

import be.kauffman.kfm.modules.grade.entity.dto.Grade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface GradeRepository extends JpaRepository<Grade, UUID> {
    @Query("SELECT g FROM Grade g WHERE g.name LIKE %?1%")
    public List<Grade> search(String keyword);
}
