package be.kauffman.KFM.appointment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import be.kauffman.kfm.appointment.entity.dto.Appointment;

import java.util.UUID;

public interface AppointmentRepository extends JpaRepository<Appointment, UUID> {
}
