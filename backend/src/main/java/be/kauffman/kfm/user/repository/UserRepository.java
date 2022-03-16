package be.kauffman.kfm.user.repository;

import be.kauffman.kfm.user.entity.dto.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> {
}
