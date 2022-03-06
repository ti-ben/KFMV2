package be.kauffman.KFM.role.repository;

import be.kauffman.KFM.role.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;

public interface RoleRepository extends JpaRepository<Role, UUID> {
}
