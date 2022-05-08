package be.kauffman.kfm.modules.status.controller;

import be.kauffman.kfm.modules.status.entity.payload.StatusSearchPayload;
import be.kauffman.kfm.modules.status.repository.StatusRepository;
import be.kauffman.kfm.modules.status.entity.builder.StatusBuilder;
import be.kauffman.kfm.modules.status.entity.dto.Status;
import be.kauffman.kfm.modules.status.entity.payload.StatusCreatePayload;
import be.kauffman.kfm.modules.status.entity.payload.StatusUpdatePayload;
import be.kauffman.kfm.common.entity.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/status")

public class StatusController {
    @Autowired
    StatusRepository statusRepository;

    // search
    @PostMapping("/search")
    public ApiResponse search(@RequestBody StatusSearchPayload search){
        try{
            List<Status> status = (!search.getSearch().equals("")) ? statusRepository.search(search.getSearch()) : statusRepository.findAll();
            return new ApiResponse(true, status, null);
        }catch(Exception e){
            return new ApiResponse(true, null, null);
        }
    }

    // Create record
    @PostMapping("/create")
    public ApiResponse create(@RequestBody StatusCreatePayload payload){
        Status status = new StatusBuilder()
                .setName(payload.getName())
                .setDescription(payload.getDescription())
                .setActive(payload.getActive())
                .build();
        return new ApiResponse(true, statusRepository.save(status), null);
    }

    // Read all records
    @GetMapping("/list")
    public ApiResponse get(){
        return new ApiResponse(true, statusRepository.findAll(), null);
    }

    // Read record detail
    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable("id") UUID id){
        Status fromDb = statusRepository.findById(id).orElse(null);
        if(fromDb == null){
            return new ApiResponse(false, null, "api.status.detail.not-found");
        }
        return new ApiResponse(true,fromDb, null);
    }

    // Update record
    @PutMapping("/update")
    public ApiResponse update(@RequestBody StatusUpdatePayload payload) {
        Status fromDb = statusRepository.findById(payload.getStatus_id()).orElse(null);
        if(fromDb == null){
            return new ApiResponse(false, null, "api.status.update.not-found");
        }
        fromDb.setName(payload.getName());
        fromDb.setDescription(payload.getDescription());
        fromDb.setActive(payload.getActive());
        return new ApiResponse(true, statusRepository.save(fromDb), null);
    }

    // Delete record
}
