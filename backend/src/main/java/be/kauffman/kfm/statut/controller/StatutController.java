package be.kauffman.KFM.statut.controller;

import be.kauffman.KFM.common.entity.ApiResponse;
import be.kauffman.KFM.immatriculation.entity.Immatriculation;
import be.kauffman.KFM.immatriculation.entity.ImmatriculationUpdatePayload;
import be.kauffman.KFM.statut.entity.Statut;
import be.kauffman.KFM.statut.entity.StatutCreatePayload;
import be.kauffman.KFM.statut.entity.StatutUpdatePayload;
import be.kauffman.KFM.statut.repository.StatutRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/statut")

public class StatutController {
    @Autowired
    StatutRepository statutRepository;

    // Create record
    @PostMapping("/create")
    public ApiResponse create(@RequestBody StatutCreatePayload payload){
        Statut newStatut = new Statut.StatutBuilder()
                .setStatut_nom(payload.getStatut_nom())
                .setStatut_description(payload.getStatut_description())
                .build();
        return new ApiResponse(true, statutRepository.save(newStatut), null);
    }
    // Read all records
    @GetMapping("/list")
    public ApiResponse get(){
        return new ApiResponse(true,statutRepository.findAll(), null);
    }

    // Read record detail
    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable("id") UUID id){
        Statut fromDb = statutRepository.findById(id).orElse(null);
        if(fromDb == null){
            return new ApiResponse(false, null, "api.statut.detail.not-found");
        }
        return new ApiResponse(true,fromDb, null);
    }

    // Update record
    @PostMapping("/update")
    public ApiResponse update(@RequestBody StatutUpdatePayload payload) {
        Statut fromDb = statutRepository.findById(payload.getStatut_id()).orElse(null);
        if(fromDb == null){
            return new ApiResponse(false, null, "api.statut.update.not-found");
        }
        fromDb.setStatut_nom(payload.getStatut_nom());
        fromDb.setStatut_description(payload.getStatut_description());
        return new ApiResponse(true, statutRepository.save(fromDb), null);
    }

    // Delete record
}
