package be.kauffman.kfm.vmetrologie.controller;

import be.kauffman.kfm.common.entity.ApiResponse;
import be.kauffman.kfm.vmetrologie.entity.Vmetrologie;
import be.kauffman.kfm.vmetrologie.entity.VmetrologieCreatePayload;
import be.kauffman.kfm.vmetrologie.entity.VmetrologieUpdatePayload;
import be.kauffman.kfm.vmetrologie.repository.VmetrologieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/vmetrologie")

public class VmetrologieController {
    @Autowired
    VmetrologieRepository vmetrologieRepository;

    // Create new record
    @PostMapping("/create")
    public ApiResponse create(@RequestBody VmetrologieCreatePayload payload){
        Vmetrologie newVmetrologie = new Vmetrologie.VmetrologieBuilder()
                .setDte_start(payload.getDte_start())
                .setDte_end(payload.getDte_end())
                .setPrice(payload.getPrice())
                .setComment(payload.getComment())
                .build();
        return new ApiResponse(true,vmetrologieRepository.save(newVmetrologie), null);
    }

    // Read all records
    @GetMapping("/list")
    public ApiResponse get(){
        return new ApiResponse(true,vmetrologieRepository.findAll(), null);
    }

    // Read record details
    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable("id") UUID id){
        Vmetrologie fromDb = vmetrologieRepository.findById(id).orElse(null);
        if(fromDb == null){
            return new ApiResponse(false, null, "api.vmetrologie.detail.not-found");
        }
        return new ApiResponse(true,fromDb, null);
    }

    // Update record
    @PostMapping("/update")
    public ApiResponse update(@RequestBody VmetrologieUpdatePayload payload) {
        Vmetrologie fromDb = vmetrologieRepository.findById(payload.getVmetrologie_id()).orElse(null);
        if(fromDb == null){
            return new ApiResponse(false, null, "api.vmetrologie.update.not-found");
        }
        fromDb.setDte_start(payload.getDte_start());
        fromDb.setDte_end(payload.getDte_end());
        fromDb.setPrice(payload.getPrice());
        fromDb.setComment(payload.getComment());
        return new ApiResponse(true, vmetrologieRepository.save(fromDb), null);
    }

    // Delete record
}
