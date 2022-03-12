package be.kauffman.kfm.site.repository;

import be.kauffman.KFM.site.entity.dto.Site;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;

public interface SiteRepository extends JpaRepository<Site, UUID> {
}
