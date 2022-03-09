package be.kauffman.KFM.vintervtech.repository;

import be.kauffman.KFM.vintervtech.entity.Vintervtech;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface VintervtechRepository extends JpaRepository<Vintervtech, UUID> {
}
