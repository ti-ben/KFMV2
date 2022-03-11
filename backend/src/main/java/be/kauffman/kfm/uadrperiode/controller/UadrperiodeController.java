package be.kauffman.kfm.uadrperiode.controller;

import be.kauffman.kfm.common.entity.ApiResponse;
import be.kauffman.kfm.site.entity.Site;
import be.kauffman.kfm.site.entity.SiteCreatePayload;
import be.kauffman.kfm.site.entity.SiteUpdatePayload;
import be.kauffman.kfm.uadrperiode.entity.Uadrperiode;
import be.kauffman.kfm.uadrperiode.entity.UadrperiodeCreatePayload;
import be.kauffman.kfm.uadrperiode.entity.UadrperiodeUpdatePayload;
import be.kauffman.kfm.uadrperiode.repository.UadrperiodeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/uadrperiode")

public class UadrperiodeController {
    @Autowired
    UadrperiodeRepository uadrperiodeRepository;

    // Create new record
    @PostMapping("/create")
    public ApiResponse create(@RequestBody UadrperiodeCreatePayload payload){
        Uadrperiode newUadrperiode = new Uadrperiode.UadrperiodeBuilder()
                .setDte_start(payload.getDte_start())
                .setDte_end(payload.getDte_end())
                .build();
        return new ApiResponse(true,uadrperiodeRepository.save(newUadrperiode), null);
    }

    // Read all records
    @GetMapping("/list")
    public ApiResponse get(){
        return new ApiResponse(true,uadrperiodeRepository.findAll(), null);
    }

    // Read record details
    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable("id") UUID id){
        Uadrperiode fromDb = uadrperiodeRepository.findById(id).orElse(null);
        if(fromDb == null){
            return new ApiResponse(false, null, "api.Uadrperiode.detail.not-found");
        }
        return new ApiResponse(true,fromDb, null);
    }

    // Update record
    @PostMapping("/update")
    public ApiResponse update(@RequestBody UadrperiodeUpdatePayload payload) {
        Uadrperiode fromDb = uadrperiodeRepository.findById(payload.getUadrperiode_id()).orElse(null);
        if(fromDb == null){
            return new ApiResponse(false, null, "api.site.update.not-found");
        }
        fromDb.setDte_start(payload.getDte_start());
        fromDb.setDte_end(payload.getDte_end());
        return new ApiResponse(true, uadrperiodeRepository.save(fromDb), null);
    }

    // Delete record
}
