package be.kauffman.KFM.vadr.controller;

import be.kauffman.KFM.common.entity.ApiResponse;
import be.kauffman.KFM.vadr.entity.Vadr;
import be.kauffman.KFM.vadr.entity.VadrCreatePayload;
import be.kauffman.KFM.vadr.entity.VadrUpdatePayload;
import be.kauffman.KFM.vadr.repository.VadrRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.UUID;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/vadr")

public class VadrController {
    @Autowired
    VadrRepository vadrRepository;

    // Create new record
    @PostMapping("/create")
    public ApiResponse create(@RequestBody VadrCreatePayload payload){
        Vadr newVadr = new Vadr.VadrBuilder()
                .setDte_start(payload.getDte_start())
                .setDte_end(payload.getDte_end())
                .setComment(payload.getComment())
                .build();
        return new ApiResponse(true,vadrRepository.save(newVadr), null);
    }

    // Read all records
    @GetMapping("/list")
    public ApiResponse get(){
        return new ApiResponse(true,vadrRepository.findAll(), null);
    }

    // Read record details
    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable("id") UUID id){
        Vadr fromDb = vadrRepository.findById(id).orElse(null);
        if(fromDb == null){
            return new ApiResponse(false, null, "api.vadr.detail.not-found");
        }
        return new ApiResponse(true,fromDb, null);
    }

    // Update record
    @PostMapping("/update")
    public ApiResponse update(@RequestBody VadrUpdatePayload payload) {
        Vadr fromDb = vadrRepository.findById(payload.getVadr_id()).orElse(null);
        if(fromDb == null){
            return new ApiResponse(false, null, "api.site.update.not-found");
        }
        fromDb.setDte_start(payload.getDte_start());
        fromDb.setDte_end(payload.getDte_end());
        fromDb.setComment(payload.getComment());
        return new ApiResponse(true, vadrRepository.save(fromDb), null);
    }

    // Delete record
}
