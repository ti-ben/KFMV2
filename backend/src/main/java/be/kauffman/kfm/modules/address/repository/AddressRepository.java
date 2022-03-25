package be.kauffman.kfm.modules.address.repository;

import be.kauffman.kfm.modules.address.entity.dto.Address;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface AddressRepository extends JpaRepository<Address, UUID> {
}
