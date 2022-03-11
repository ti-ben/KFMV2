package be.kauffman.kfm.rang.entity;

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

public class Rang {
    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(columnDefinition = "BINARY(16)")
    private UUID rang_id;
    String name;
    String comment;


    // Pattern

    public static class RangBuilder{
        UUID rang_id;
        String name;
        String comment;

        public RangBuilder setRang_id(UUID rang_id) {
            this.rang_id = rang_id;
            return this;
        }

        public RangBuilder setName(String name) {
            this.name = name;
            return this;
        }

        public RangBuilder setComment(String comment) {
            this.comment = comment;
            return this;
        }

        public Rang build() { return new Rang(rang_id, name, comment); }
    }
}
