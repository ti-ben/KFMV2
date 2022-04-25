package be.kauffman.kfm.modules.prestataire.controller;

import be.kauffman.kfm.modules.prestataire.entity.builder.PrestataireBuilder;
import be.kauffman.kfm.modules.prestataire.repository.PrestataireRepository;
import be.kauffman.kfm.common.entity.ApiResponse;
import be.kauffman.kfm.modules.prestataire.entity.dto.Prestataire;
import be.kauffman.kfm.modules.prestataire.entity.payload.PrestataireCreatePayload;
import be.kauffman.kfm.modules.prestataire.entity.payload.PrestataireUpdatePayload;
import be.kauffman.kfm.modules.vehicule.entity.payload.VehiculeSearchPayload;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/prestataire")

public class PrestataireController {

    @Autowired
    PrestataireRepository prestataireRepository;

    // search
    @PostMapping("/search")
    public ApiResponse search(@RequestBody VehiculeSearchPayload search) {
        try {
            List<Prestataire> prestataires = (!search.getSearch().equals("")) ? prestataireRepository.search(search.getSearch()) : prestataireRepository.findAll();
            return new ApiResponse(true, prestataires, null);
        } catch (Exception e) {
            return new ApiResponse(true, null, null);
        }
    }

    // Create record
    @PostMapping("/create")
    public ApiResponse create(@RequestBody PrestataireCreatePayload payload){
        Prestataire prestataire = new PrestataireBuilder()
                .setName(payload.getName())
                .setEmail(payload.getEmail())
                .setTel(payload.getTel())
                .setService(payload.getRole())
                .build();
        return new ApiResponse(true, prestataireRepository.save(prestataire), null);
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
    @PutMapping("/update")
    public ApiResponse update(@RequestBody PrestataireUpdatePayload payload){
        Prestataire fromDb = prestataireRepository.findById(payload.getPrestataire_id()).orElse(null);
        if(fromDb == null){
            return new ApiResponse(false, null, "api.prestataire.update.not-found");
        }
        fromDb.setName(payload.getName());
        fromDb.setEmail(payload.getEmail());
        fromDb.setTel(payload.getTel());
        fromDb.setService(payload.getService());
        return new ApiResponse(true, prestataireRepository.save(fromDb), null);
    }

    // Delete record

}
