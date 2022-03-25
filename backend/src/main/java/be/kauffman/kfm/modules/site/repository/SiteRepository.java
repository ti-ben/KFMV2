package be.kauffman.kfm.modules.site.repository;

import be.kauffman.kfm.modules.site.entity.dto.Site;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;

public interface SiteRepository extends JpaRepository<Site, UUID> {
}
