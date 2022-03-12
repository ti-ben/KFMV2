package be.kauffman.kfm.appointment.controller;

import be.kauffman.kfm.appointment.entity.builder.AppointmentBuilder;
import be.kauffman.kfm.appointment.entity.dto.Appointment;
import be.kauffman.kfm.appointment.entity.payload.AppointCreatePayload;
import be.kauffman.kfm.common.entity.ApiResponse;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/appointment")
public class AppointmentController {

    // Create new record
    @PostMapping("/create")
    public ApiResponse create(@RequestBody AppointCreatePayload payload) {
        Appointment appointment = new AppointmentBuilder()
                .setStart_date(payload.getStart_date())
                .setEnd_date(payload.getEnd_date())
                .setComment(payload.getComment())
                .setTheme(payload.getTheme())
                .setPrice(payload.getPrice())
                .build();
        return new ApiResponse(true, appointment, null);
    }
}
