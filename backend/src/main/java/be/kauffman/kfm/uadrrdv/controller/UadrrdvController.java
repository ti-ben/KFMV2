package be.kauffman.kfm.uadrrdv.controller;

import be.kauffman.kfm.common.entity.ApiResponse;
import be.kauffman.kfm.site.entity.Site;
import be.kauffman.kfm.site.entity.SiteCreatePayload;
import be.kauffman.kfm.site.entity.SiteUpdatePayload;
import be.kauffman.kfm.uadrrdv.entity.Uadrrdv;
import be.kauffman.kfm.uadrrdv.entity.UadrrdvCreatePayload;
import be.kauffman.kfm.uadrrdv.entity.UadrrdvUpdatePayload;
import be.kauffman.kfm.uadrrdv.repository.UadrrdvRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/uadrrdv")

public class UadrrdvController {
    @Autowired
    UadrrdvRepository uadrrdvRepository;

    // Create new record
    @PostMapping("/create")
    public ApiResponse create(@RequestBody UadrrdvCreatePayload payload){
        Uadrrdv newUadrrdv = new Uadrrdv.UadrrdvBuilder()
                .setDte_rdv(payload.getDte_rdv())
                .setCategory(payload.getCategory())
                .setComment(payload.getComment())
                .build();
        return new ApiResponse(true,uadrrdvRepository.save(newUadrrdv), null);
    }

    // Read all records
    @GetMapping("/list")
    public ApiResponse get(){
        return new ApiResponse(true,uadrrdvRepository.findAll(), null);
    }

    // Read record details
    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable("id") UUID id){
        Uadrrdv fromDb = uadrrdvRepository.findById(id).orElse(null);
        if(fromDb == null){
            return new ApiResponse(false, null, "api.Uadrrdv.detail.not-found");
        }
        return new ApiResponse(true,fromDb, null);
    }

    // Update record
    @PostMapping("/update")
    public ApiResponse update(@RequestBody UadrrdvUpdatePayload payload) {
        Uadrrdv fromDb = uadrrdvRepository.findById(payload.getUadrrdv_id()).orElse(null);
        if(fromDb == null){
            return new ApiResponse(false, null, "api.Uadrrdv.update.not-found");
        }
        fromDb.setDte_rdv(payload.getDte_rdv());
        fromDb.setCategory(payload.getCategory());
        fromDb.setComment(payload.getComment());
        return new ApiResponse(true, uadrrdvRepository.save(fromDb), null);
    }

    // Delete record
}
