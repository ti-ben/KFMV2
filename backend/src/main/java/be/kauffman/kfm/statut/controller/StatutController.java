package be.kauffman.KFM.statut.controller;

import be.kauffman.KFM.common.entity.ApiResponse;
import be.kauffman.KFM.statut.entity.Statut;
import be.kauffman.KFM.statut.entity.StatutCreatePayload;
import be.kauffman.KFM.statut.entity.StatutUpdatePayload;
import be.kauffman.KFM.statut.repository.StatutRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    // Update record
    @PostMapping("/update")
    public ApiResponse update(@RequestBody StatutUpdatePayload payload){
        Statut newStatut = new Statut.StatutBuilder()
                .setStatut_id(payload.getStatut_id())
                .build();
        return new ApiResponse(true, statutRepository.save(newStatut), null);
    }

    // Delete record
}
