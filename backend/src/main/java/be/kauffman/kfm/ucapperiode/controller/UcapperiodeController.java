package be.kauffman.KFM.ucapperiode.controller;

import be.kauffman.KFM.common.entity.ApiResponse;
import be.kauffman.KFM.site.entity.Site;
import be.kauffman.KFM.site.entity.SiteCreatePayload;
import be.kauffman.KFM.site.entity.SiteUpdatePayload;
import be.kauffman.KFM.ucapperiode.entity.Ucapperiode;
import be.kauffman.KFM.ucapperiode.entity.UcapperiodeCreatePayload;
import be.kauffman.KFM.ucapperiode.entity.UcapperiodeUpdatePayload;
import be.kauffman.KFM.ucapperiode.repository.UcapperiodeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/ucapperiode")

public class UcapperiodeController {
    @Autowired
    UcapperiodeRepository ucapperiodeRepository;

    // Create new record
    @PostMapping("/create")
    public ApiResponse create(@RequestBody UcapperiodeCreatePayload payload){
        Ucapperiode newUcapperiode = new Ucapperiode.UcapperiodeBuilder()
                .setDte_start(payload.getDte_start())
                .setDte_end(payload.getDte_end())
                .build();
        return new ApiResponse(true,ucapperiodeRepository.save(newUcapperiode), null);
    }

    // Read all records
    // Read all records
    @GetMapping("/list")
    public ApiResponse get(){
        return new ApiResponse(true,ucapperiodeRepository.findAll(), null);
    }

    // Read record details
    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable("id") UUID id){
        Ucapperiode fromDb = ucapperiodeRepository.findById(id).orElse(null);
        if(fromDb == null){
            return new ApiResponse(false, null, "api.Ucapperiode.detail.not-found");
        }
        return new ApiResponse(true,fromDb, null);
    }

    // Update record
    @PostMapping("/update")
    public ApiResponse update(@RequestBody UcapperiodeUpdatePayload payload) {
        Ucapperiode fromDb = ucapperiodeRepository.findById(payload.getUcapperiode_id()).orElse(null);
        if(fromDb == null){
            return new ApiResponse(false, null, "api.Ucapperiode.update.not-found");
        }
        fromDb.setDte_start(payload.getDte_start());
        fromDb.setDte_end(payload.getDte_end());
        return new ApiResponse(true, ucapperiodeRepository.save(fromDb), null);
    }

    // Delete record
}
