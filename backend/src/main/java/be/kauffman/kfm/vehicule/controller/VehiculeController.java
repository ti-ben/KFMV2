package be.kauffman.KFM.vehicule.controller;

import be.kauffman.KFM.common.entity.ApiResponse;
import be.kauffman.KFM.vehicule.entity.Vehicule;
import be.kauffman.KFM.vehicule.entity.VehiculeCreatePayload;
import be.kauffman.KFM.vehicule.entity.VehiculeUpdatePayload;
import be.kauffman.KFM.vehicule.repository.VehiculeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/vehicule")

public class VehiculeController {
    @Autowired
    VehiculeRepository vehiculeRepository;

    // Create record
    @PostMapping("/create")
    public ApiResponse create(@RequestBody VehiculeCreatePayload payload){
        Vehicule newVehicule = new Vehicule.VehiculeBuilder()
                .setDop(payload.getDop())
                .setActive(payload.getActive())
                .setPrice(payload.getPrice())
                .setNum_chassis(payload.getNum_chassis())
                .setBrand(payload.getBrand())
                .setCde_carrosserie(payload.getCde_carrosserie())
                .setGenre(payload.getGenre())
                .setMom(payload.getMom())
                .setMma(payload.getMma())
                .setMmat(payload.getMmat())
                .setMta(payload.getMta())
                .setClasse_enviro(payload.getClasse_enviro())
                .setNbr_km(payload.getNbr_km())
                .setMetrologie(payload.getMetrologie())
                .setPicture(payload.getPicture())
                .setFuel(payload.getFuel())
                .setType(payload.getType())
                .build();
        return new ApiResponse(true,vehiculeRepository.save(newVehicule), null);
    }

    // Read all record
    @GetMapping("/list")
    public ApiResponse get(){
        return new ApiResponse(true,vehiculeRepository.findAll(), null);
    }

    // Read record details
    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable("id") UUID id){
        Vehicule fromDb = vehiculeRepository.findById(id).orElse(null);
        if(fromDb == null){
            return new ApiResponse(false, null, "api.vehicule.detail.not-found");
        }
        return new ApiResponse(true,fromDb, null);
    }

    // Update record
    @PostMapping("/update")
    public ApiResponse update(@RequestBody VehiculeUpdatePayload payload) {
        Vehicule fromDb = vehiculeRepository.findById(payload.getVehicule_id()).orElse(null);
        if(fromDb == null){
            return new ApiResponse(false, null, "api.vehicule.update.not-found");
        }
        fromDb.setDop(payload.getDop());
        fromDb.setActive(payload.getActive());
        fromDb.setPrice(payload.getPrice());
        fromDb.setNum_chassis(payload.getNum_chassis());
        fromDb.setBrand(payload.getBrand());
        fromDb.setCde_carrosserie(payload.getCde_carrosserie());
        fromDb.setGenre(payload.getGenre());
        fromDb.setMom(payload.getMom());
        fromDb.setMma(payload.getMma());
        fromDb.setMmat(payload.getMmat());
        fromDb.setMta(payload.getMta());
        fromDb.setClasse_enviro(payload.getClasse_enviro());
        fromDb.setNbr_km(payload.getNbr_km());
        fromDb.setMetrologie(payload.getMetrologie());
        fromDb.setPicture(payload.getPicture());
        fromDb.setFuel(payload.getFuel());
        fromDb.setType(payload.getType());
        return new ApiResponse(true, vehiculeRepository.save(fromDb), null);
    }

    // Delete record
}
