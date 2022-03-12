package be.kauffman.kfm.utachygraphe.controller;

import be.kauffman.KFM.tachygraphe.entity.builder.TachygrapheBuilder;
import be.kauffman.KFM.tachygraphe.entity.dto.Tachygraphe;
import be.kauffman.KFM.tachygraphe.entity.payload.TachygrapheCreatePayload;
import be.kauffman.KFM.tachygraphe.entity.payload.TachygrapheUpdatePayload;
import be.kauffman.kfm.common.entity.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import be.kauffman.kfm.utachygraphe.repository.TachygrapheRepository;

import java.util.UUID;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/tachygraphe")

public class TachygrapheController {
    @Autowired
    TachygrapheRepository tachygrapheRepository;

    // Create new record
    @PostMapping("/create")
    public ApiResponse create(@RequestBody TachygrapheCreatePayload payload){
        Tachygraphe tachygraphe = new TachygrapheBuilder()
                .setDte_start(payload.getDte_start())
                .setDte_end(payload.getDte_end())
                .setNum_carte(payload.getNum_carte())
                .setComment(payload.getComment())
                .build();
        return new ApiResponse(true, tachygrapheRepository.save(tachygraphe), null);
    }

    // Read all records
    @GetMapping("/list")
    public ApiResponse get(){
        return new ApiResponse(true, tachygrapheRepository.findAll(), null);
    }

    // Read record details
    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable("id") UUID id){
        Tachygraphe fromDb = tachygrapheRepository.findById(id).orElse(null);
        if(fromDb == null){
            return new ApiResponse(false, null, "api.utachygraphe.detail.not-found");
        }
        return new ApiResponse(true,fromDb, null);
    }

    // Update record
    @PostMapping("/update")
    public ApiResponse update(@RequestBody TachygrapheUpdatePayload payload) {
        Tachygraphe fromDb = tachygrapheRepository.findById(payload.getUtachygraphe_id()).orElse(null);
        if(fromDb == null){
            return new ApiResponse(false, null, "api.site.update.not-found");
        }
        fromDb.setDte_start(payload.getDte_start());
        fromDb.setDte_end(payload.getDte_end());
        fromDb.setNum_carte(payload.getNum_carte());
        fromDb.setComment(payload.getComment());
        return new ApiResponse(true, tachygrapheRepository.save(fromDb), null);
    }

    // Delete record
}
