package be.kauffman.kfm.vintervtech.repository;

import be.kauffman.kfm.vintervtech.entity.Vintervtech;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface VintervtechRepository extends JpaRepository<Vintervtech, UUID> {
}
