package be.kauffman.KFM.role.controller;

import be.kauffman.KFM.common.entity.ApiResponse;
import be.kauffman.KFM.immatriculation.entity.Immatriculation;
import be.kauffman.KFM.immatriculation.entity.ImmatriculationUpdatePayload;
import be.kauffman.KFM.role.entity.Role;
import be.kauffman.KFM.role.entity.RoleCreatePayload;
import be.kauffman.KFM.role.entity.RoleUpdatePayload;
import be.kauffman.KFM.role.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/role")

public class RoleController {
    @Autowired
    RoleRepository roleRepository;

    // Create new record
    @PostMapping("/create")
    public ApiResponse create(@RequestBody RoleCreatePayload payload){
        Role newRole = new Role.RoleBuilder()
                .setRole_name(payload.getRole_name())
                .setRole_description(payload.getRole_description())
                .build();
        return new ApiResponse(true,roleRepository.save(newRole),null);
    }

    // Read all records
    @GetMapping("/list")
    public ApiResponse get() { return new ApiResponse(true, roleRepository.findAll(), null);}

    // Read record detail
    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable("id") UUID id){
        Role fromDb = roleRepository.findById(id).orElse(null);
        if(fromDb == null){
            return new ApiResponse(false, null, "api.role.detail.not-found");
        }
        return new ApiResponse(true,fromDb, null);
    }

    // Update record
    @PostMapping("/update")
    public ApiResponse update(@RequestBody RoleUpdatePayload payload) {
        Role fromDb = roleRepository.findById(payload.getRole_id()).orElse(null);
        if(fromDb == null){
            return new ApiResponse(false, null, "api.role.update.not-found");
        }
        fromDb.setRole_name(payload.getRole_name());
        return new ApiResponse(true, roleRepository.save(fromDb), null);
    }

    // Delete record
}
