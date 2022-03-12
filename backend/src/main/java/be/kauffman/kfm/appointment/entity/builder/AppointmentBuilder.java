package be.kauffman.kfm.appointment.entity.builder;
import be.kauffman.KFM.period.entity.dto.Period;
import be.kauffman.KFM.user.entity.dto.User;
import be.kauffman.kfm.appointment.entity.dto.Appointment;

import java.util.Date;
import java.util.UUID;

public class AppointmentBuilder {
    UUID appointment_id;
    Date start_date;
    Date end_date;
    String price;
    String theme;
    String comment;
    String type;
    String category;
    Period period;
    User user;

    public AppointmentBuilder setAppointment_id(UUID appointment_id) {
        this.appointment_id = appointment_id;
        return this;
    }

    public AppointmentBuilder setStart_date(Date start_date) {
        this.start_date = start_date;
        return this;
    }

    public AppointmentBuilder setEnd_date(Date end_date) {
        this.end_date = end_date;
        return this;
    }

    public AppointmentBuilder setPrice(String price) {
        this.price = price;
        return this;
    }

    public AppointmentBuilder setTheme(String theme) {
        this.theme = theme;
        return this;
    }

    public AppointmentBuilder setComment(String comment) {
        this.comment = comment;
        return this;
    }

    public AppointmentBuilder setType(String type) {
        this.type = type;
        return this;
    }
    public AppointmentBuilder setCategory(String category) {
        this.category = category;
        return this;
    }

    public AppointmentBuilder setPeriod(Period period) {
        this.period = period;
        return this;
    }

    public AppointmentBuilder setUser(User user) {
        this.user = user;
        return this;
    }

    public Appointment build() {
        return new Appointment(appointment_id, start_date, end_date, price, theme, comment, type, category, period, user);
    }

}
