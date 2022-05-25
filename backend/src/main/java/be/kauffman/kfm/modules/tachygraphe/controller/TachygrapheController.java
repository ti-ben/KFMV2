package be.kauffman.kfm.modules.tachygraphe.controller;

import be.kauffman.kfm.common.entity.ApiResponse;
import be.kauffman.kfm.modules.tachygraphe.entity.builder.TachygrapheBuilder;
import be.kauffman.kfm.modules.tachygraphe.entity.dto.Tachygraphe;
import be.kauffman.kfm.modules.tachygraphe.entity.payload.TachygrapheCreatePayload;
import be.kauffman.kfm.modules.tachygraphe.entity.payload.TachygrapheUpdatePayload;
import be.kauffman.kfm.modules.tachygraphe.repository.TachygrapheRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/tachygraphe")

public class TachygrapheController {
    @Autowired
    TachygrapheRepository tachygrapheRepository;

    // Create new record
    @PostMapping("/create")
    public ApiResponse create(@RequestBody TachygrapheCreatePayload payload) {
        Tachygraphe tachygraphe = new TachygrapheBuilder()
                .setStart_date(payload.getStart_date())
                .setEnd_date(payload.getEnd_date())
                .setNum_carte(payload.getNum_carte())
                .setComment(payload.getComment())
                .setUser(payload.getUser())
                .build();
        return new ApiResponse(true, tachygrapheRepository.save(tachygraphe), null);
    }

    // Read all user tachy records
    @GetMapping("/list/{userId}")
    public ApiResponse get(@PathVariable("userId") UUID userId) {
        return new ApiResponse(true, tachygrapheRepository.findTachygrapheByUserId(userId), null);
    }

    // Read record details
    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable("id") UUID id) {
        Tachygraphe fromDb = tachygrapheRepository.findById(id).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.tachygraphe.detail.not-found");
        }
        return new ApiResponse(true, fromDb, null);
    }

    // Update record
    @PostMapping("/update")
    public ApiResponse update(@RequestBody TachygrapheUpdatePayload payload) {
        Tachygraphe fromDb = tachygrapheRepository.findById(payload.getUtachygraphe_id()).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.tachygraphe.update.not-found");
        }
        fromDb.setStart_date(payload.getStart_date());
        fromDb.setEnd_date(payload.getEnd_date());
        fromDb.setNum_carte(payload.getNum_carte());
        fromDb.setComment(payload.getComment());
        return new ApiResponse(true, tachygrapheRepository.save(fromDb), null);
    }

}
