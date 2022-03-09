package be.kauffman.KFM.vctrltech.repository;

import be.kauffman.KFM.vctrltech.entity.Vctrltech;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface VctrltechRepository extends JpaRepository<Vctrltech, UUID> {
}
