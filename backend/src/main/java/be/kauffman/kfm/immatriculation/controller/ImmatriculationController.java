package be.kauffman.KFM.immatriculation.controller;

import be.kauffman.KFM.common.entity.ApiResponse;
import be.kauffman.KFM.immatriculation.entity.Immatriculation;
import be.kauffman.KFM.immatriculation.entity.ImmatriculationCreatePayload;
import be.kauffman.KFM.immatriculation.entity.ImmatriculationUpdatePayload;
import be.kauffman.KFM.immatriculation.repository.ImmatriculationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/immatriculation")

public class ImmatriculationController {

    @Autowired
    ImmatriculationRepository immatriculationRepository;

    // Create new record
    @PostMapping("/create")
    public ApiResponse create(@RequestBody ImmatriculationCreatePayload payload){
        Immatriculation newImat = new Immatriculation.ImmatriculationBuilder()
                .setNum_plaque(payload.getNum_plaque())
                .build();
        return new ApiResponse(true,immatriculationRepository.save(newImat), null);
    }

    // Read all records
    @GetMapping("/list")
    public ApiResponse get(){
        return new ApiResponse(true,immatriculationRepository.findAll(), null);
    }
    // Read detail
    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable("id")int id){
        Immatriculation fromDb = immatriculationRepository.findById(id).orElse(null);
        if(fromDb == null){
            return new ApiResponse(false, null, "api.immatriculation.detail.not-found");
        }
        return new ApiResponse(true,fromDb, null);
    }

    // Update record
    @PostMapping("/update")
    public ApiResponse update(@RequestBody ImmatriculationUpdatePayload payload) {
        Immatriculation fromDb = immatriculationRepository.findById(payload.getImmatriculation_id()).orElse(null);
        if(fromDb == null){
            return new ApiResponse(false, null, "api.immatriculation.update.not-found");
        }
        fromDb.setNum_plaque(payload.getNum_plaque());
        return new ApiResponse(true, immatriculationRepository.save(fromDb), null);
    }

    // Delete record
}
