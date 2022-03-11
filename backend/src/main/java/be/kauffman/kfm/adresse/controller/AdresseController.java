package be.kauffman.kfm.adresse.controller;

import be.kauffman.kfm.adresse.entity.Adresse;
import be.kauffman.kfm.adresse.entity.AdresseCreatePayload;
import be.kauffman.kfm.adresse.entity.AdresseUpdatePayload;
import be.kauffman.kfm.adresse.repository.AdresseRepository;
import be.kauffman.kfm.common.entity.ApiResponse;
import be.kauffman.kfm.site.entity.Site;
import be.kauffman.kfm.site.entity.SiteCreatePayload;
import be.kauffman.kfm.site.entity.SiteUpdatePayload;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/adresse")

public class AdresseController {
    @Autowired
    AdresseRepository adresseRepository;

    // Create new record
    @PostMapping("/create")
    public ApiResponse create(@RequestBody AdresseCreatePayload payload){
        Adresse newAdresse = new Adresse.AdresseBuilder()
                .setCountry(payload.getCountry())
                .setCp(payload.getCp())
                .setNum(payload.getNum())
                .setRoad(payload.getRoad())
                .setTown(payload.getTown())
                .build();
        return new ApiResponse(true,adresseRepository.save(newAdresse), null);
    }

    // Read all records
    @GetMapping("/list")
    public ApiResponse get(){
        return new ApiResponse(true,adresseRepository.findAll(), null);
    }

    // Read record details
    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable("id") UUID id){
        Adresse fromDb = adresseRepository.findById(id).orElse(null);
        if(fromDb == null){
            return new ApiResponse(false, null, "api.adresse.detail.not-found");
        }
        return new ApiResponse(true,fromDb, null);
    }

    // Update record
    @PostMapping("/update")
    public ApiResponse update(@RequestBody AdresseUpdatePayload payload) {
        Adresse fromDb = adresseRepository.findById(payload.getAdresse_id()).orElse(null);
        if(fromDb == null){
            return new ApiResponse(false, null, "api.adresse.update.not-found");
        }
        fromDb.setCountry(payload.getCountry());
        fromDb.setCp(payload.getCp());
        fromDb.setNum(payload.getNum());
        fromDb.setRoad(payload.getRoad());
        fromDb.setTown(payload.getTown());

        return new ApiResponse(true, adresseRepository.save(fromDb), null);
    }

    // Delete record
}
