package be.kauffman.kfm.modules.user.controller;

import be.kauffman.kfm.common.entity.ApiResponse;
import be.kauffman.kfm.modules.user.entity.builder.UserBuilder;
import be.kauffman.kfm.modules.user.entity.dto.User;
import be.kauffman.kfm.modules.user.entity.payload.UserCreatePayload;
import be.kauffman.kfm.modules.user.entity.payload.UserUpdatePayload;
import be.kauffman.kfm.modules.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    UserRepository userRepository;

    // Create record
    @PostMapping("/create")
    public ApiResponse create(@RequestBody UserCreatePayload payload) {
        User user = new UserBuilder()
                .setFirstname(payload.getFirstname())
                .setLastname(payload.getLastname())
                .setGender(payload.getGender())
                .setAvatar(payload.getAvatar())
                .setDob(payload.getDob())
                .setEmail(payload.getEmail())
                .setTelpro(payload.getTelpro())
                .setTelperso(payload.getTelperso())
                .setNationality(payload.getNationality())
                .setNumirn(payload.getNumirn())
                .setDriver_license(payload.getDriver_license())
                .setCreated_on(payload.getCreated_on())
                .setPob(payload.getPob())
                .setActive(payload.getActive())
                .build();
        return new ApiResponse(true, userRepository.save(user), null);
    }

    // Read all records
    @GetMapping("/list")
    public ApiResponse get() {
        return new ApiResponse(true, userRepository.findAll(), null);
    }

    // Read record detail
    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable("id") UUID id) {
        User fromDb = userRepository.findById(id).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.user.detail.not-found");
        }
        return new ApiResponse(true, fromDb, null);
    }

    // Update record
    @PostMapping("/update")
    public ApiResponse update(@RequestBody UserUpdatePayload payload) {
        User fromDb = userRepository.findById(payload.getUser_id()).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.user.update.not-found");
        }
        fromDb.setFirstname(payload.getFirstname());
        fromDb.setLastname(payload.getLastname());
        fromDb.setGender(payload.getGender());
        fromDb.setAvatar(payload.getAvatar());
        fromDb.setDob(payload.getDob());
        fromDb.setEmail(payload.getEmail());
        fromDb.setTelpro(payload.getTelpro());
        fromDb.setTelperso(payload.getTelperso());
        fromDb.setNationality(payload.getNationality());
        fromDb.setNumirn(payload.getNumirn());
        fromDb.setDriver_license(payload.getDriver_license());
        fromDb.setCreated_on(payload.getCreated_on());
        fromDb.setPob(payload.getPob());
        fromDb.setActive(payload.getActive());
        return new ApiResponse(true, userRepository.save(fromDb), null);
    }

    // Delete record
}
