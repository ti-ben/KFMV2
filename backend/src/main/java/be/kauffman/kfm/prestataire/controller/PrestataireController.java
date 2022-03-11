package be.kauffman.kfm.prestataire.controller;

import be.kauffman.kfm.common.entity.ApiResponse;
import be.kauffman.kfm.prestataire.entity.Prestataire;
import be.kauffman.kfm.prestataire.entity.PrestataireCreatePayload;
import be.kauffman.kfm.prestataire.entity.PrestataireUpdatePayload;
import be.kauffman.kfm.prestataire.repository.PrestataireRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/prestataire")

public class PrestataireController {

    @Autowired
    PrestataireRepository prestataireRepository;

    // Create record
    @PostMapping("/create")
    public ApiResponse create(@RequestBody PrestataireCreatePayload payload){
        Prestataire newPrestataire = new Prestataire.PrestataireBuilder()
                .setPrestataire_name(payload.getPrestataire_name())
                .setPrestataire_adresse(payload.getPrestataire_adresse())
                .setPrestataire_email(payload.getPrestataire_email())
                .setPrestataire_tel(payload.getPrestataire_tel())
                .setPrestataire_role(payload.getPrestataire_role())
                .build();
        return new ApiResponse(true, prestataireRepository.save(newPrestataire), null);
    }

    // Read all records
    @GetMapping("/list")
    public ApiResponse get(){
        return new ApiResponse(true,prestataireRepository.findAll(), null);
    }

    // Read record detail
    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable("id") UUID id){
        Prestataire fromDb = prestataireRepository.findById(id).orElse(null);
        if(fromDb == null){
            return new ApiResponse(false, null, "api.prestataire.detail.not-found");
        }
        return new ApiResponse(true,fromDb, null);
    }

    // Update record
    @PostMapping("/update")
    public ApiResponse update(@RequestBody PrestataireUpdatePayload payload){
        Prestataire fromDb = prestataireRepository.findById(payload.getPrestataire_id()).orElse(null);
        if(fromDb == null){
            return new ApiResponse(false, null, "api.prestataire.update.not-found");
        }
        fromDb.setPrestataire_name(payload.getPrestataire_name());
        return new ApiResponse(true, prestataireRepository.save(fromDb), null);
    }

    // Delete record

}
