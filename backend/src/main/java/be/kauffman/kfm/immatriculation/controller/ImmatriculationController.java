package be.kauffman.KFM.immatriculation.controller;

import be.kauffman.KFM.common.entity.ApiResponse;
import be.kauffman.KFM.immatriculation.entity.Immatriculation;
import be.kauffman.KFM.immatriculation.entity.ImmatriculationCreatePayload;
import be.kauffman.KFM.immatriculation.entity.ImmatriculationUpdatePayload;
import be.kauffman.KFM.immatriculation.repository.ImmatriculationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    // Update record
    @PostMapping("/update")
    public ApiResponse update(@RequestBody ImmatriculationUpdatePayload payload) {
        Immatriculation newImat = new Immatriculation.ImmatriculationBuilder()
                .setImmatriculation_id(payload.getImmatriculation_id())
                .build();
        return new ApiResponse(true, immatriculationRepository.save(newImat), null);
    }

    // Delete record
}
