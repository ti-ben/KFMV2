package be.kauffman.kfm.rang.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import be.kauffman.kfm.rang.repository.RangRepository;
import be.kauffman.kfm.common.entity.ApiResponse;
import be.kauffman.kfm.rang.entity.Rang;
import be.kauffman.kfm.rang.entity.RangCreatePayload;
import be.kauffman.kfm.rang.entity.RangUpdatePayload;

import java.util.UUID;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/rang")

public class RangController {
    @Autowired
    RangRepository rangRepository;

    // Create new record
    @PostMapping("/create")
    public ApiResponse create(@RequestBody RangCreatePayload payload){
        Rang newRang = new Rang.RangBuilder()
                .setName(payload.getName())
                .setComment(payload.getComment())
                .build();
        return new be.kauffman.kfm.common.entity.ApiResponse(true,rangRepository.save(newRang), null);
    }

    // Read all records
    @GetMapping("/list")
    public ApiResponse get(){
        return new ApiResponse(true,rangRepository.findAll(), null);
    }
    // Read record detail
    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable("id") UUID id){
        Rang fromDb = rangRepository.findById(id).orElse(null);
        if(fromDb == null){
            return new ApiResponse(false, null, "api.rang.detail.not-found");
        }
        return new ApiResponse(true,fromDb, null);
    }

    // Update record
    @PostMapping("/update")
    public ApiResponse update(@RequestBody RangUpdatePayload payload) {
        Rang fromDb = rangRepository.findById(payload.getRang_id()).orElse(null);
        if(fromDb == null){
            return new ApiResponse(false, null, "api.rang.update.not-found");
        }
        fromDb.setName(payload.getName());
        fromDb.setComment(payload.getComment());
        return new ApiResponse(true, rangRepository.save(fromDb), null);
    }

    // Delete record
}
