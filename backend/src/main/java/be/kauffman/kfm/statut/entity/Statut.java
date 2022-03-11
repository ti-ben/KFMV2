package be.kauffman.kfm.statut.entity;

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

public class Statut {
    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(columnDefinition = "BINARY(16)")
    private UUID statut_id;
    String statut_nom;
    String statut_description;

    // Pattern

    public static class StatutBuilder{
        UUID statut_id;
        String statut_nom = "Pas de nom";
        String statut_description = "Pas de description";

        public StatutBuilder setStatut_id(UUID statut_id) {
            this.statut_id = statut_id;
            return this;
        }

        public StatutBuilder setStatut_nom(String statut_nom) {
            this.statut_nom = statut_nom;
            return this;
        }

        public StatutBuilder setStatut_description(String statut_description) {
            this.statut_description = statut_description;
            return this;
        }

        public Statut build() { return new Statut(statut_id, statut_nom, statut_description); }
    }
}
