package be.kauffman.kfm.modules.user.repository;

import be.kauffman.kfm.modules.user.entity.dto.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> {
    User findByEmail(String email);

    @Query("SELECT u FROM User u WHERE u.firstname LIKE %?1%"
            + " OR u.lastname LIKE %?1%")
    public List<User> search(String keyword);
}
