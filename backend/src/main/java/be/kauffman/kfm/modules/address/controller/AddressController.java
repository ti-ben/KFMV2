package be.kauffman.kfm.modules.address.controller;

import be.kauffman.kfm.modules.address.entity.payload.AddressCreatePayload;
import be.kauffman.kfm.modules.address.entity.payload.AddressUpdatePayload;
import be.kauffman.kfm.modules.address.entity.builder.AddressBuilder;
import be.kauffman.kfm.modules.address.entity.dto.Address;
import be.kauffman.kfm.modules.address.repository.AddressRepository;
import be.kauffman.kfm.common.entity.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/address")

public class AddressController {
    @Autowired
    AddressRepository addressRepository;

    // Create new record
    @PostMapping("/create")
    public ApiResponse create(@RequestBody AddressCreatePayload payload){
        Address address = new AddressBuilder()
                .setRoad(payload.getRoad())
                .setCp(payload.getCp())
                .setTown(payload.getTown())
                .setCountry(payload.getCountry())
                .setNum(payload.getNum())
                .build();
        return new ApiResponse(true, addressRepository.save(address), null);
    }

    // Read all records
    @GetMapping("/list")
    public ApiResponse get(){
        return new ApiResponse(true, addressRepository.findAll(), null);
    }

    // Read record details
    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable("id") UUID id){
        Address fromDb = addressRepository.findById(id).orElse(null);
        if(fromDb == null){
            return new ApiResponse(false, null, "api.adresse.detail.not-found");
        }
        return new ApiResponse(true,fromDb, null);
    }

    // Update record
    @PutMapping("/update")
    public ApiResponse update(@RequestBody AddressUpdatePayload payload) {
        Address fromDb = addressRepository.findById(payload.getAdresse_id()).orElse(null);
        if(fromDb == null){
            return new ApiResponse(false, null, "api.adresse.update.not-found");
        }
        fromDb.setCountry(payload.getCountry());
        fromDb.setCp(payload.getCp());
        fromDb.setNum(payload.getNum());
        fromDb.setRoad(payload.getRoad());
        fromDb.setTown(payload.getTown());

        return new ApiResponse(true, addressRepository.save(fromDb), null);
    }

    // Delete record
}
