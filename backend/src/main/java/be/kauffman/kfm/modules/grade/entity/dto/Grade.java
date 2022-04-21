package be.kauffman.kfm.modules.grade.entity.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity

public class Grade {
    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(columnDefinition = "BINARY(16)")
    private UUID grade_id;
    String name;
    String comment;
    Boolean defaultValue;

    //todo j'ai du ajouter ce constructeur sinon j'avais une erreur dans le fichier GradeBuilder.java
    public Grade(UUID grade_id, String name, String comment) {
    }
}