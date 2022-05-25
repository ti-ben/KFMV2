package be.kauffman.kfm.modules.tachygraphe.repository;

import be.kauffman.kfm.modules.tachygraphe.entity.dto.Tachygraphe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface TachygrapheRepository extends JpaRepository<Tachygraphe, UUID> {
    @Query("SELECT t from Tachygraphe t where t.user.user_id = :user")
    List<Tachygraphe> findTachygrapheByUserId(UUID user);
}
