package be.kauffman.kfm.modules.period.controller;

import be.kauffman.kfm.modules.period.entity.builder.PeriodBuilder;
import be.kauffman.kfm.modules.period.entity.dto.Period;
import be.kauffman.kfm.modules.period.entity.payload.PeriodCreatePayload;
import be.kauffman.kfm.modules.period.entity.payload.PeriodUpdatePayload;
import be.kauffman.kfm.modules.period.repository.PeriodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import be.kauffman.kfm.common.entity.ApiResponse;

import java.util.UUID;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/period")

public class PeriodController {
    @Autowired
    PeriodRepository periodRepository;

    // Create new record
    @PostMapping("/create")
    public ApiResponse create(@RequestBody PeriodCreatePayload payload){
        Period period = new PeriodBuilder()
                .setStart_date(payload.getStart_date())
                .setEnd_date(payload.getEnd_date())
                .build();
        return new ApiResponse(true, periodRepository.save(period), null);
    }
    // Read all records
    @GetMapping("/list")
    public ApiResponse get(){
        return new ApiResponse(true, periodRepository.findAll(), null);
    }

    // Read record details
    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable("id") UUID id){
        Period fromDb = periodRepository.findById(id).orElse(null);
        if(fromDb == null){
            return new ApiResponse(false, null, "api.period.detail.not-found");
        }
        return new ApiResponse(true,fromDb, null);
    }

    // Update record
    @PutMapping("/update")
    public ApiResponse update(@RequestBody PeriodUpdatePayload payload) {
        Period fromDb = periodRepository.findById(payload.getPeriod_id()).orElse(null);
        if(fromDb == null){
            return new ApiResponse(false, null, "api.period.update.not-found");
        }
        fromDb.setStart_date(payload.getStart_date());
        fromDb.setEnd_date(payload.getEnd_date());

        return new ApiResponse(true, periodRepository.save(fromDb), null);
    }

    // Delete record
}
