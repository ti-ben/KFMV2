package be.kauffman.kfm.imatriculation.controller;

import be.kauffman.kfm.common.entity.ApiResponse;
import be.kauffman.kfm.imatriculation.entity.Immatriculation;
import be.kauffman.kfm.imatriculation.entity.ImmatriculationCreatePayload;
import be.kauffman.kfm.imatriculation.entity.ImmatriculationUpdatePayload;
import be.kauffman.kfm.imatriculation.repository.ImmatriculationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/immatriculation")
public class ImmatriculationController {
    @Autowired
    ImmatriculationRepository immatriculationRepository;

    // Create
    @PostMapping("/create")
    public ApiResponse create(@RequestBody ImmatriculationCreatePayload payload) {
        Immatriculation newImat = new Immatriculation.ImmatriculationBuilder()
                                                    .setNumero(payload.getNumero())
                                                    .build();
        return new ApiResponse(true, immatriculationRepository.save(newImat), null);
    }

    // Read
    @GetMapping("/list")
    public ApiResponse get() {
        return new ApiResponse(true, immatriculationRepository.findAll(), null);
    }
    // Update
    @PostMapping("/update")
    public ApiResponse update(@RequestBody ImmatriculationUpdatePayload payload) {
        Immatriculation newImat = new Immatriculation.ImmatriculationBuilder()
                .setImmatriculation_id(payload.getImatriculation_id())
                .setNumero(payload.getNumero())
                .build();
        return new ApiResponse(true, immatriculationRepository.save(newImat), null);
    }

    // Delete
}
