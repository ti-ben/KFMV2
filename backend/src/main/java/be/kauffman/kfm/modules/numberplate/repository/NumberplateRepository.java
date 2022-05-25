package be.kauffman.kfm.modules.numberplate.repository;

import be.kauffman.kfm.modules.numberplate.entity.dto.Numberplate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface NumberplateRepository extends JpaRepository<Numberplate, UUID> {
    @Query("SELECT n FROM Numberplate n WHERE n.num_plate LIKE %?1%")
    public List<Numberplate> search(String keyword);
}
