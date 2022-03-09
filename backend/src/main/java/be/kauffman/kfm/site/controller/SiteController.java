package be.kauffman.KFM.site.controller;

import be.kauffman.KFM.common.entity.ApiResponse;
import be.kauffman.KFM.site.entity.Site;
import be.kauffman.KFM.site.entity.SiteCreatePayload;
import be.kauffman.KFM.site.entity.SiteUpdatePayload;
import be.kauffman.KFM.site.repository.SiteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.UUID;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/site")

public class SiteController {
    @Autowired
    SiteRepository siteRepository;

    // Create new record
    @PostMapping("/create")
    public ApiResponse create(@RequestBody SiteCreatePayload payload){
        Site newSite = new Site.SiteBuilder()
                .setSite_nom(payload.getSite_nom())
                .setSite_adresse(payload.getSite_adresse())
                .setSite_description(payload.getSite_description())
                .build();
        return new ApiResponse(true,siteRepository.save(newSite), null);
    }

    // Read all records
    @GetMapping("/list")
    public ApiResponse get(){
        return new ApiResponse(true,siteRepository.findAll(), null);
    }

    // Read record detail
    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable("id") UUID id){
        Site fromDb = siteRepository.findById(id).orElse(null);
        if(fromDb == null){
            return new ApiResponse(false, null, "api.site.detail.not-found");
        }
        return new ApiResponse(true,fromDb, null);
    }

    // Update record
    @PostMapping("/update")
    public ApiResponse update(@RequestBody SiteUpdatePayload payload) {
        Site fromDb = siteRepository.findById(payload.getSite_id()).orElse(null);
        if(fromDb == null){
            return new ApiResponse(false, null, "api.site.update.not-found");
        }
        fromDb.setSite_description(payload.getSite_description());
        return new ApiResponse(true, siteRepository.save(fromDb), null);
    }

    // Delete record

}
