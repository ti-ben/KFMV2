package be.kauffman.kfm.uselectmedperiode.controller;

import be.kauffman.kfm.common.entity.ApiResponse;
import be.kauffman.kfm.uselectmedperiode.entity.Uselectmedperiode;
import be.kauffman.kfm.uselectmedperiode.entity.UselectmedperiodeCreatePayload;
import be.kauffman.kfm.uselectmedperiode.entity.UselectmedperiodeUpdatePayload;
import be.kauffman.kfm.uselectmedperiode.repository.UselectmedperiodeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/uselectmedperiode")

public class UselectmedperiodeController {
    @Autowired
    UselectmedperiodeRepository uselectmedperiodeRepository;

    // Create new record
    @PostMapping("/create")
    public ApiResponse create(@RequestBody UselectmedperiodeCreatePayload payload){
        Uselectmedperiode newUselectmedperiode = new Uselectmedperiode.UselectmedperiodeBuilder()
                .setDte_start(payload.getDte_start())
                .setDte_end(payload.getDte_end())
                .build();
        return new ApiResponse(true,uselectmedperiodeRepository.save(newUselectmedperiode), null);
    }

    // Read all records
    @GetMapping("/list")
    public ApiResponse get(){
        return new ApiResponse(true,uselectmedperiodeRepository.findAll(), null);
    }

    // Read record details
    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable("id") UUID id){
        Uselectmedperiode fromDb = uselectmedperiodeRepository.findById(id).orElse(null);
        if(fromDb == null){
            return new ApiResponse(false, null, "api.Uselectmedperiode.detail.not-found");
        }
        return new ApiResponse(true,fromDb, null);
    }

    // Update record
    @PostMapping("/update")
    public ApiResponse update(@RequestBody UselectmedperiodeUpdatePayload payload) {
        Uselectmedperiode fromDb = uselectmedperiodeRepository.findById(payload.getUselectmedperiode_id()).orElse(null);
        if(fromDb == null){
            return new ApiResponse(false, null, "api.site.update.not-found");
        }
        fromDb.setDte_start(payload.getDte_start());
        fromDb.setDte_end(payload.getDte_end());
        return new ApiResponse(true, uselectmedperiodeRepository.save(fromDb), null);
    }
    // Delete record
}
