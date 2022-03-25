package be.kauffman.kfm.modules.appointment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import be.kauffman.kfm.modules.appointment.entity.dto.Appointment;

import java.util.UUID;

public interface AppointmentRepository extends JpaRepository<Appointment, UUID> {
}
