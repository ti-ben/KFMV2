package be.kauffman.kfm.modules.grade.entity.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GradeUpdatePayload {
    UUID grade_id;
    String comment;
    String name;
    String active;
}
