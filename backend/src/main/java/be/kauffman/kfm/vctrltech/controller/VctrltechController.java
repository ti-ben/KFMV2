package be.kauffman.kfm.vctrltech.controller;

import be.kauffman.kfm.common.entity.ApiResponse;
import be.kauffman.kfm.site.entity.Site;
import be.kauffman.kfm.site.entity.SiteCreatePayload;
import be.kauffman.kfm.site.entity.SiteUpdatePayload;
import be.kauffman.kfm.vctrltech.entity.Vctrltech;
import be.kauffman.kfm.vctrltech.entity.VctrltechCreatePayload;
import be.kauffman.kfm.vctrltech.entity.VctrltechUpdatePayload;
import be.kauffman.kfm.vctrltech.repository.VctrltechRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/vctrltech")

public class VctrltechController {
    @Autowired
    VctrltechRepository vctrltechRepository;

    // Create new record
    @PostMapping("/create")
    public ApiResponse create(@RequestBody VctrltechCreatePayload payload){
        Vctrltech newVctrltech = new Vctrltech.VctrltechBuilder()
                .setDte_start(payload.getDte_start())
                .setDte_end(payload.getDte_end())
                .setPrice(payload.getPrice())
                .setComment(payload.getComment())
                .build();
        return new ApiResponse(true,vctrltechRepository.save(newVctrltech), null);
    }

    // Read all records
    @GetMapping("/list")
    public ApiResponse get(){
        return new ApiResponse(true,vctrltechRepository.findAll(), null);
    }

    // Read record details
    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable("id") UUID id){
        Vctrltech fromDb = vctrltechRepository.findById(id).orElse(null);
        if(fromDb == null){
            return new ApiResponse(false, null, "api.vctrltech.detail.not-found");
        }
        return new ApiResponse(true,fromDb, null);
    }

    // Update record
    @PostMapping("/update")
    public ApiResponse update(@RequestBody VctrltechUpdatePayload payload) {
        Vctrltech fromDb = vctrltechRepository.findById(payload.getVctrltech_id()).orElse(null);
        if(fromDb == null){
            return new ApiResponse(false, null, "api.site.update.not-found");
        }
        fromDb.setDte_start(payload.getDte_start());
        fromDb.setDte_end(payload.getDte_end());
        fromDb.setPrice(payload.getPrice());
        fromDb.setComment(payload.getComment());
        return new ApiResponse(true, vctrltechRepository.save(fromDb), null);
    }

    // Delete record
}
