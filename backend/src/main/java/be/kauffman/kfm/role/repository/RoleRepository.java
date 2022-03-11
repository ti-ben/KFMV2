package be.kauffman.kfm.role.repository;

import be.kauffman.kfm.role.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;

public interface RoleRepository extends JpaRepository<Role, UUID> {
}
