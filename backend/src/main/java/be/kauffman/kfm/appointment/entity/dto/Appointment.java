package be.kauffman.KFM.appointment.entity.dto;

import be.kauffman.KFM.period.entity.dto.Period;
import be.kauffman.KFM.user.entity.dto.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Date;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity

public class Appointment {
    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(columnDefinition = "BINARY(16)")
    UUID appointment_id;
    Date start_date;
    Date end_date;
    String price;
    String theme;
    String comment;
    String type;
    String category;

    @OneToOne()
    @JoinColumn(name ="period_id_fk", referencedColumnName = "period_id")
    Period period;

    @ManyToOne()
    @JoinColumn(name = "user_id_fk", referencedColumnName = "user_id")
    User user;

}
