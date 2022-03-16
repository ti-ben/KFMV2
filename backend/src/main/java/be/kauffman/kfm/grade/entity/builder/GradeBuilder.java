package be.kauffman.kfm.grade.entity.builder;

import be.kauffman.kfm.grade.entity.dto.Grade;
import java.util.UUID;

public class GradeBuilder{
    UUID grade_id;
    String name;
    String comment;

    public GradeBuilder setGrade_id(UUID grade_id) {
        this.grade_id = grade_id;
        return this;
    }

    public GradeBuilder setName(String name) {
        this.name = name;
        return this;
    }

    public GradeBuilder setComment(String comment) {
        this.comment = comment;
        return this;
    }

    public Grade build() { return new Grade(grade_id, name, comment); }
}
