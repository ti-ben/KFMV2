package be.kauffman.KFM.utachygraphe.controller;

import be.kauffman.KFM.common.entity.ApiResponse;
import be.kauffman.KFM.utachygraphe.entity.Utachygraphe;
import be.kauffman.KFM.utachygraphe.entity.UtachygrapheCreatePayload;
import be.kauffman.KFM.utachygraphe.entity.UtachygrapheUpdatePayload;
import be.kauffman.KFM.utachygraphe.repository.UtachygrapheRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/utachygraphe")

public class UtachygrapheController {
    @Autowired
    UtachygrapheRepository utachygrapheRepository;

    // Create new record
    @PostMapping("/create")
    public ApiResponse create(@RequestBody UtachygrapheCreatePayload payload){
        Utachygraphe newUtachygraphe = new Utachygraphe.UtachygrapheBuilder()
                .setDte_start(payload.getDte_start())
                .setDte_end(payload.getDte_end())
                .setNum_carte(payload.getNum_carte())
                .setComment(payload.getComment())
                .build();
        return new ApiResponse(true,utachygrapheRepository.save(newUtachygraphe), null);
    }

    // Read all records
    @GetMapping("/list")
    public ApiResponse get(){
        return new ApiResponse(true,utachygrapheRepository.findAll(), null);
    }

    // Read record details
    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable("id") UUID id){
        Utachygraphe fromDb = utachygrapheRepository.findById(id).orElse(null);
        if(fromDb == null){
            return new ApiResponse(false, null, "api.utachygraphe.detail.not-found");
        }
        return new ApiResponse(true,fromDb, null);
    }

    // Update record
    @PostMapping("/update")
    public ApiResponse update(@RequestBody UtachygrapheUpdatePayload payload) {
        Utachygraphe fromDb = utachygrapheRepository.findById(payload.getUtachygraphe_id()).orElse(null);
        if(fromDb == null){
            return new ApiResponse(false, null, "api.site.update.not-found");
        }
        fromDb.setDte_start(payload.getDte_start());
        fromDb.setDte_end(payload.getDte_end());
        fromDb.setNum_carte(payload.getNum_carte());
        fromDb.setComment(payload.getComment());
        return new ApiResponse(true, utachygrapheRepository.save(fromDb), null);
    }

    // Delete record
}
