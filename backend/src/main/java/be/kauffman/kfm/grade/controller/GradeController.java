package be.kauffman.KFM.grade.controller;

import be.kauffman.KFM.grade.entity.builder.GradeBuilder;
import be.kauffman.KFM.grade.repository.GradeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import be.kauffman.kfm.common.entity.ApiResponse;
import be.kauffman.KFM.grade.entity.dto.Grade;
import be.kauffman.KFM.grade.entity.payload.GradeCreatePayload;
import be.kauffman.KFM.grade.entity.payload.GradeUpdatePayload;

import java.util.UUID;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/grade")

public class GradeController {
    @Autowired
    GradeRepository gradeRepository;

    // Create new record
    @PostMapping("/create")
    public ApiResponse create(@RequestBody GradeCreatePayload payload){
        Grade grade = new GradeBuilder()
                .setName(payload.getName())
                .setComment(payload.getComment())
                .build();
        return new be.kauffman.kfm.common.entity.ApiResponse(true, gradeRepository.save(grade), null);
    }

    // Read all records
    @GetMapping("/list")
    public ApiResponse get(){
        return new ApiResponse(true, gradeRepository.findAll(), null);
    }

    // Read record detail
    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable("id") UUID id){
        Grade fromDb = gradeRepository.findById(id).orElse(null);
        if(fromDb == null){
            return new ApiResponse(false, null, "api.rang.detail.not-found");
        }
        return new ApiResponse(true,fromDb, null);
    }

    // Update record
    @PostMapping("/update")
    public ApiResponse update(@RequestBody GradeUpdatePayload payload) {
        Grade fromDb = gradeRepository.findById(payload.getGrade_id()).orElse(null);
        if(fromDb == null){
            return new ApiResponse(false, null, "api.rang.update.not-found");
        }
        fromDb.setName(payload.getName());
        fromDb.setComment(payload.getComment());
        return new ApiResponse(true, gradeRepository.save(fromDb), null);
    }

    // Delete record
}
