package be.kauffman.kfm.modules.site.repository;

import be.kauffman.kfm.modules.site.entity.dto.Site;
import be.kauffman.kfm.modules.vehicule.entity.dto.Vehicule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface SiteRepository extends JpaRepository<Site, UUID> {
    @Query("SELECT s FROM Site s WHERE s.name LIKE %?1%"
    )
    public List<Site> search(String keyword);
}
