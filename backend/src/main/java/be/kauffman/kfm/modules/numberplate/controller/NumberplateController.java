package be.kauffman.kfm.modules.numberplate.controller;

import be.kauffman.kfm.common.entity.ApiResponse;
import be.kauffman.kfm.modules.numberplate.entity.builder.NumberplateBuilder;
import be.kauffman.kfm.modules.numberplate.entity.dto.Numberplate;
import be.kauffman.kfm.modules.numberplate.entity.payload.NumberplateCreatePayload;
import be.kauffman.kfm.modules.numberplate.entity.payload.NumberplateUpdatePayload;
import be.kauffman.kfm.modules.numberplate.repository.NumberplateRepository;
import be.kauffman.kfm.modules.vehicule.entity.dto.Vehicule;
import be.kauffman.kfm.modules.vehicule.entity.payload.VehiculeSearchPayload;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/numberplate")

public class NumberplateController {
    @Autowired
    NumberplateRepository numberplateRepository;

    // search
    @PostMapping("/search")
    public ApiResponse search(@RequestBody VehiculeSearchPayload search) {
        try {
            List<Numberplate> numberplates = (!search.getSearch().equals("")) ? numberplateRepository.search(search.getSearch()) : numberplateRepository.findAll();
            return new ApiResponse(true, numberplates, null);
        } catch (Exception e) {
            return new ApiResponse(true, null, null);
        }
    }

    // Create new record
    @PostMapping("/create")
    public ApiResponse create(@RequestBody NumberplateCreatePayload payload) {
        Numberplate numberplate = new NumberplateBuilder()
                .setNum_plate(payload.getNum_plate())
                .setDop(payload.getDop())
                .build();
        return new ApiResponse(true, numberplateRepository.save(numberplate), null);
    }

    // Read all records
    @GetMapping("/list")
    public ApiResponse get() {
        return new ApiResponse(true, numberplateRepository.findAll(), null);
    }

    // Read record detail
    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable("id") UUID id) {
        Numberplate fromDb = numberplateRepository.findById(id).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.numberplate.detail.not-found");
        }
        return new ApiResponse(true, fromDb, null);
    }

    // Update record
    @PostMapping("/update")
    public ApiResponse update(@RequestBody NumberplateUpdatePayload payload) {
        Numberplate fromDb = numberplateRepository.findById(payload.getNumberplate_id()).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.numberplate.update.not-found");
        }
        fromDb.setNum_plate(payload.getNum_plate());
        fromDb.setDop(payload.getDop());
        return new ApiResponse(true, numberplateRepository.save(fromDb), null);
    }

    // Delete record
}
