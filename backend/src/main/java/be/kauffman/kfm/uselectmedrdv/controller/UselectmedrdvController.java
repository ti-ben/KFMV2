package be.kauffman.kfm.uselectmedrdv.controller;

import be.kauffman.kfm.common.entity.ApiResponse;
import be.kauffman.kfm.uselectmedrdv.entity.Uselectmedrdv;
import be.kauffman.kfm.uselectmedrdv.entity.UselectmedrdvCreatePayload;
import be.kauffman.kfm.uselectmedrdv.entity.UselectmedrdvUpdatePayload;
import be.kauffman.kfm.uselectmedrdv.repository.UselectmedrdvRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/uselectmedrdv")

public class UselectmedrdvController {
    @Autowired
    UselectmedrdvRepository uselectmedrdvRepository;

    // Create new record
    @PostMapping("/create")
    public ApiResponse create(@RequestBody UselectmedrdvCreatePayload payload){
        Uselectmedrdv newUselectmedrdv = new Uselectmedrdv.UselectmedrdvBuilder()
                .setDte_rdv(payload.getDte_rdv())
                .setPrice(payload.getPrice())
                .setComment(payload.getComment())
                .build();
        return new ApiResponse(true,uselectmedrdvRepository.save(newUselectmedrdv), null);
    }

    // Read all records
    @GetMapping("/list")
    public ApiResponse get(){
        return new ApiResponse(true,uselectmedrdvRepository.findAll(), null);
    }

    // Read record details
    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable("id") UUID id){
        Uselectmedrdv fromDb = uselectmedrdvRepository.findById(id).orElse(null);
        if(fromDb == null){
            return new ApiResponse(false, null, "api.Uselectmedrdv.detail.not-found");
        }
        return new ApiResponse(true,fromDb, null);
    }

    // Update record
    @PostMapping("/update")
    public ApiResponse update(@RequestBody UselectmedrdvUpdatePayload payload) {
        Uselectmedrdv fromDb = uselectmedrdvRepository.findById(payload.getUselectmedrdv_id()).orElse(null);
        if(fromDb == null){
            return new ApiResponse(false, null, "api.Uselectmedrdv.update.not-found");
        }
        fromDb.setDte_rdv(payload.getDte_rdv());
        fromDb.setPrice(payload.getPrice());
        fromDb.setComment(payload.getComment());
        return new ApiResponse(true, uselectmedrdvRepository.save(fromDb), null);
    }

    // Delete record
}
