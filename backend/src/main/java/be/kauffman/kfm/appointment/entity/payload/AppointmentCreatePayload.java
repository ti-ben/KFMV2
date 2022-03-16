package be.kauffman.kfm.appointment.entity.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class AppointmentCreatePayload {
    Date start_date;
    Date end_date;
    String price;
    String theme;
    String comment;
    String type;
    String category;
}
