package be.kauffman.kfm.modules.appointment.entity.builder;
import be.kauffman.kfm.modules.period.entity.dto.Period;
import be.kauffman.kfm.modules.user.entity.dto.User;
import be.kauffman.kfm.modules.appointment.entity.dto.Appointment;

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
    String tag;
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

    public AppointmentBuilder setTag(String tag) {
        this.tag = tag;
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
        return new Appointment(appointment_id, start_date, end_date, price, theme, comment, type, category, tag, period, user);
    }

}
