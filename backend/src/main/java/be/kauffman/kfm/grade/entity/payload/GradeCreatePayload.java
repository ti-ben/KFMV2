package be.kauffman.KFM.grade.entity.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GradeCreatePayload {
    String comment;
    String name;
}
