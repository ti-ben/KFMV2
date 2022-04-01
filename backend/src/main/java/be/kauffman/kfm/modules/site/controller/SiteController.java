package be.kauffman.kfm.modules.site.controller;

import be.kauffman.kfm.modules.site.entity.builder.SiteBuilder;
import be.kauffman.kfm.common.entity.ApiResponse;
import be.kauffman.kfm.modules.site.entity.dto.Site;
import be.kauffman.kfm.modules.site.entity.payload.SiteCreatePayload;
import be.kauffman.kfm.modules.site.entity.payload.SiteSearchPayload;
import be.kauffman.kfm.modules.site.entity.payload.SiteUpdatePayload;
import be.kauffman.kfm.modules.site.repository.SiteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/site")

public class SiteController {
    @Autowired
    SiteRepository siteRepository;

    // search
    @PostMapping("/search")
    public ApiResponse search(@RequestBody SiteSearchPayload search) {
        try {
            List<Site> sites = (!search.getSearch().equals("")) ? siteRepository.search(search.getSearch()) : siteRepository.findAll();
            return new ApiResponse(true, sites, null);
        } catch (Exception e) {
            return new ApiResponse(true, null, null);
        }
    }

    // Create new record
    @PostMapping("/create")
    public ApiResponse create(@RequestBody SiteCreatePayload payload){
        Site site = new SiteBuilder()
                .setName(payload.getName())
                .setDescription(payload.getDescription())
                .setCreated_on(payload.getCreated_on())
                .build();
        return new ApiResponse(true,siteRepository.save(site), null);
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
        fromDb.setName(payload.getName());
        fromDb.setDescription(payload.getDescription());
        return new ApiResponse(true, siteRepository.save(fromDb), null);
    }

    // Delete record

}
