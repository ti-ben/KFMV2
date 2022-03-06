package be.kauffman.KFM.prestataire.controller;

import be.kauffman.KFM.common.entity.ApiResponse;
import be.kauffman.KFM.prestataire.entity.Prestataire;
import be.kauffman.KFM.prestataire.entity.PrestataireCreatePayload;
import be.kauffman.KFM.prestataire.entity.PrestataireUpdatePayload;
import be.kauffman.KFM.prestataire.repository.PrestataireRepository;
import be.kauffman.KFM.site.entity.Site;
import be.kauffman.KFM.site.entity.SiteUpdatePayload;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    // Update record
    @PostMapping("/update")
    public ApiResponse update(@RequestBody PrestataireUpdatePayload payload){
        Prestataire newPrestataire = new Prestataire.PrestataireBuilder()
                .setPrestataire_id(payload.getPrestataire_id())
                .build();
        return new ApiResponse(true, prestataireRepository.save(newPrestataire), null);
    }

    // Delete record

}
