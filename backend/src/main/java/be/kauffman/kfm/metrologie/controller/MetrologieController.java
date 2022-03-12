package be.kauffman.kfm.metrologie.controller;

import be.kauffman.KFM.metrologie.entity.builder.MetrologieBuilder;
import be.kauffman.KFM.metrologie.entity.payload.MetrologieCreatePayload;
import be.kauffman.KFM.metrologie.entity.payload.MetrologieUpdatePayload;
import be.kauffman.kfm.common.entity.ApiResponse;
import be.kauffman.kfm.metrologie.repository.MetrologieRepository;
import be.kauffman.KFM.metrologie.entity.dto.Metrologie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/metrologie")

public class MetrologieController {
    @Autowired
    MetrologieRepository metrologieRepository;

    // Create new record
    @PostMapping("/create")
    public ApiResponse create(@RequestBody MetrologieCreatePayload payload){
        Metrologie metrologie = new MetrologieBuilder()
                .setStart_date(payload.getStart_date())
                .setEnd_date(payload.getEnd_date())
                .setPrice(payload.getPrice())
                .setComment(payload.getComment())
                .build();
        return new ApiResponse(true,metrologieRepository.save(metrologie), null);
    }

    // Read all records
    @GetMapping("/list")
    public ApiResponse get(){
        return new ApiResponse(true,metrologieRepository.findAll(), null);
    }

    // Read record details
    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable("id") UUID id){
        Metrologie fromDb = metrologieRepository.findById(id).orElse(null);
        if(fromDb == null){
            return new ApiResponse(false, null, "api.metrologie.detail.not-found");
        }
        return new ApiResponse(true,fromDb, null);
    }

    // Update record
    @PostMapping("/update")
    public ApiResponse update(@RequestBody MetrologieUpdatePayload payload) {
        Metrologie fromDb = metrologieRepository.findById(payload.getMetrologie_id()).orElse(null);
        if(fromDb == null){
            return new ApiResponse(false, null, "api.metrologie.update.not-found");
        }
        fromDb.setStart_date(payload.getStart_date());
        fromDb.setEnd_date(payload.getEnd_date());
        fromDb.setPrice(payload.getPrice());
        fromDb.setComment(payload.getComment());
        return new ApiResponse(true, metrologieRepository.save(fromDb), null);
    }

    // Delete record
}
