package be.kauffman.KFM.site.controller;

import be.kauffman.KFM.common.entity.ApiResponse;
import be.kauffman.KFM.site.entity.Site;
import be.kauffman.KFM.site.entity.SiteCreatePayload;
import be.kauffman.KFM.site.entity.SiteUpdatePayload;
import be.kauffman.KFM.site.repository.SiteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    // Update record
    @PostMapping("/update")
    public ApiResponse update(@RequestBody SiteUpdatePayload payload){
        Site newSite = new Site.SiteBuilder()
                .setSite_id(payload.getSite_id())
                .build();
        return new ApiResponse(true, siteRepository.save(newSite), null);
    }

    // Delete record

}
