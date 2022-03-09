package be.kauffman.KFM.ucaprdv.controller;

import be.kauffman.KFM.common.entity.ApiResponse;
import be.kauffman.KFM.site.entity.Site;
import be.kauffman.KFM.site.entity.SiteUpdatePayload;
import be.kauffman.KFM.ucaprdv.entity.Ucaprdv;
import be.kauffman.KFM.ucaprdv.entity.UcaprdvCreatePayload;
import be.kauffman.KFM.ucaprdv.entity.UcaprdvUpdatePayload;
import be.kauffman.KFM.ucaprdv.repository.UcaprdvRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/ucaprdv")

public class UcaprdvController {
    @Autowired
    UcaprdvRepository ucaprdvRepository;

    // Create new record
    @PostMapping("/create")
    public ApiResponse create(@RequestBody UcaprdvCreatePayload payload){
        Ucaprdv newUcaprdv = new Ucaprdv.UcaprdvBuilder()
                .setDte_start(payload.getDte_start())
                .setDte_end(payload.getDte_end())
                .setPrice(payload.getPrice())
                .setComment(payload.getComment())
                .setTheme(payload.getTheme())
                .build();
        return new ApiResponse(true,ucaprdvRepository.save(newUcaprdv), null);
    }

    // Read all records
    @GetMapping("/list")
    public ApiResponse get(){
        return new ApiResponse(true,ucaprdvRepository.findAll(), null);
    }

    // Read record details
    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable("id") UUID id){
        Ucaprdv fromDb = ucaprdvRepository.findById(id).orElse(null);
        if(fromDb == null){
            return new ApiResponse(false, null, "api.Ucaprdv.detail.not-found");
        }
        return new ApiResponse(true,fromDb, null);
    }

    // Update record
    @PostMapping("/update")
    public ApiResponse update(@RequestBody UcaprdvUpdatePayload payload) {
        Ucaprdv fromDb = ucaprdvRepository.findById(payload.getUcaprdv_id()).orElse(null);
        if(fromDb == null){
            return new ApiResponse(false, null, "api.site.update.not-found");
        }
        fromDb.setDte_start(payload.getDte_start());
        fromDb.setDte_end(payload.getDte_end());
        fromDb.setTheme(payload.getTheme());
        fromDb.setPrice(payload.getPrice());
        fromDb.setComment(payload.getComment());
        return new ApiResponse(true, ucaprdvRepository.save(fromDb), null);
    }

    // Delete record
}
