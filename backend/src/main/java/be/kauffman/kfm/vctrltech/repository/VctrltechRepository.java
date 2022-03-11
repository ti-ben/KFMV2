package be.kauffman.kfm.vctrltech.repository;

import be.kauffman.kfm.vctrltech.entity.Vctrltech;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface VctrltechRepository extends JpaRepository<Vctrltech, UUID> {
}
