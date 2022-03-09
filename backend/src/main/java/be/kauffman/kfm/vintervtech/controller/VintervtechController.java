package be.kauffman.KFM.vintervtech.controller;

import be.kauffman.KFM.common.entity.ApiResponse;
import be.kauffman.KFM.vintervtech.entity.Vintervtech;
import be.kauffman.KFM.vintervtech.entity.VintervtechCreatePayload;
import be.kauffman.KFM.vintervtech.entity.VintervtechUpdatePayload;
import be.kauffman.KFM.vintervtech.repository.VintervtechRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/vintervtech")

public class VintervtechController {
    @Autowired
    VintervtechRepository vintervtechRepository;

    // Create new record
    @PostMapping("/create")
    public ApiResponse create(@RequestBody VintervtechCreatePayload payload){
        Vintervtech newVintervtech = new Vintervtech.VintervtechBuilder()
                .setDte_start(payload.getDte_start())
                .setDte_end(payload.getDte_end())
                .setPrice(payload.getPrice())
                .setComment(payload.getComment())
                .build();
        return new ApiResponse(true,vintervtechRepository.save(newVintervtech), null);
    }

    // Read all records
    @GetMapping("/list")
    public ApiResponse get(){
        return new ApiResponse(true,vintervtechRepository.findAll(), null);
    }

    // Read record details
    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable("id") UUID id){
        Vintervtech fromDb = vintervtechRepository.findById(id).orElse(null);
        if(fromDb == null){
            return new ApiResponse(false, null, "api.vintervetech.detail.not-found");
        }
        return new ApiResponse(true,fromDb, null);
    }

    // Update record
    @PostMapping("/update")
    public ApiResponse update(@RequestBody VintervtechUpdatePayload payload) {
        Vintervtech fromDb = vintervtechRepository.findById(payload.getVintervtech_id()).orElse(null);
        if(fromDb == null){
            return new ApiResponse(false, null, "api.site.update.not-found");
        }
        fromDb.setDte_start(payload.getDte_start());
        fromDb.setDte_end(payload.getDte_end());
        fromDb.setPrice(payload.getPrice());
        fromDb.setComment(payload.getComment());
        return new ApiResponse(true, vintervtechRepository.save(fromDb), null);
    }

    // Delete record
}
