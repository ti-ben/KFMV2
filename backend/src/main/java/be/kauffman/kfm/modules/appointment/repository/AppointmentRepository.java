package be.kauffman.kfm.modules.appointment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import be.kauffman.kfm.modules.appointment.entity.dto.Appointment;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface AppointmentRepository extends JpaRepository<Appointment, UUID> {
    @Query ("SELECT a from Appointment a WHERE a.period.period_id =:period AND a.user.user_id=:user")
    List<Appointment> findByPeriodAndUser(UUID period, UUID user);
}
