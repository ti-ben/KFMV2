package be.kauffman.KFM.site.repository;

import be.kauffman.KFM.site.entity.Site;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;

public interface SiteRepository extends JpaRepository<Site, UUID> {
}
