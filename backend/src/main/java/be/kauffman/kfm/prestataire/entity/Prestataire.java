package be.kauffman.kfm.prestataire.entity;

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
public class Prestataire {
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name = "prestataire_id", updatable = false, nullable = false)
    private UUID prestataire_id;
    String prestataire_name;
    String prestataire_tel;
    String prestataire_email;
    String prestataire_adresse;
    String prestataire_role;

    //Pattern

    public static class PrestataireBuilder{
        UUID prestataire_id;
        String prestataire_name     = "";
        String prestataire_tel      = "";
        String prestataire_email    = "";
        String prestataire_adresse  = "";
        String prestataire_role     = "";

        public PrestataireBuilder setPrestataire_id(UUID prestataire_id) {
            this.prestataire_id = prestataire_id;
            return this;
        }

        public PrestataireBuilder setPrestataire_name(String prestataire_name) {
            this.prestataire_name = prestataire_name;
            return this;
        }

        public PrestataireBuilder setPrestataire_tel(String prestataire_tel) {
            this.prestataire_tel = prestataire_tel;
            return this;
        }

        public PrestataireBuilder setPrestataire_email(String prestataire_email) {
            this.prestataire_email = prestataire_email;
            return this;
        }

        public PrestataireBuilder setPrestataire_adresse(String prestataire_adresse) {
            this.prestataire_adresse = prestataire_adresse;
            return this;
        }

        public PrestataireBuilder setPrestataire_role(String prestataire_role) {
            this.prestataire_role = prestataire_role;
            return this;
        }

        public Prestataire build() { return new Prestataire(prestataire_id, prestataire_name, prestataire_tel, prestataire_email, prestataire_adresse, prestataire_role);}
    }
}
