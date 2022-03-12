package be.kauffman.KFM.appointment.controller;

import be.kauffman.KFM.appointment.entity.payload.AppointmentUpdatePayload;
import be.kauffman.KFM.appointment.repository.AppointmentRepository;
import be.kauffman.kfm.appointment.entity.builder.AppointmentBuilder;
import be.kauffman.kfm.appointment.entity.dto.Appointment;
import be.kauffman.kfm.common.entity.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import be.kauffman.KFM.appointment.entity.payload.AppointmentCreatePayload;

import java.util.UUID;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/appointment")

public class AppointmentController {
    @Autowired
    AppointmentRepository appointmentRepository;

    // Create new record
    @PostMapping("/create")
    public ApiResponse create(@RequestBody AppointmentCreatePayload payload) {
        Appointment appointment = new AppointmentBuilder()
                .setStart_date(payload.getStart_date())
                .setEnd_date(payload.getEnd_date())
                .setPrice(payload.getComment())
                .setTheme(payload.getTheme())
                .setComment(payload.getPrice())
                .setType(payload.getType())
                .setCategory(payload.getCategory())
                .build();
        return new ApiResponse(true, appointmentRepository.save(appointment), null);
    }

    // Read all records
    @GetMapping("/list")
    public ApiResponse get(){
        return new ApiResponse(true, appointmentRepository.findAll(), null);
    }

    // Read record details
    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable("id") UUID id){
        Appointment fromDb = appointmentRepository.findById(id).orElse(null);
        if(fromDb == null){
            return new ApiResponse(false, null, "api.appointment.detail.not-found");
        }
        return new ApiResponse(true,fromDb, null);
    }

    // Update record
    @PostMapping("/update")
    public ApiResponse update(@RequestBody AppointmentUpdatePayload payload) {
        Appointment fromDb = appointmentRepository.findById(payload.getAppointment_id()).orElse(null);
        if(fromDb == null){
            return new ApiResponse(false, null, "api.appointment.update.not-found");
        }
        fromDb.setStart_date(payload.getStart_date());
        fromDb.setEnd_date(payload.getEnd_date());
        fromDb.setPrice(payload.getPrice());
        fromDb.setTheme(payload.getTheme());
        fromDb.setComment(payload.getComment());
        fromDb.setType(payload.getType());
        fromDb.setCategory(payload.getCategory());

        return new ApiResponse(true, appointmentRepository.save(fromDb), null);
    }


}
