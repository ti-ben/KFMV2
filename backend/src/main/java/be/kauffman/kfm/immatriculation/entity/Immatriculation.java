package be.kauffman.KFM.immatriculation.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Immatriculation {
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name = "immatriculation_id", updatable = false, nullable = false)
    private UUID immatriculation_id;
    String num_plaque;
    Date dateAchat;

    // Pattern

    public static class ImmatriculationBuilder{
        UUID immatriculation_id;
        String num_plaque   = "no-numero";
        Date dateAchat      = new Date();

        public ImmatriculationBuilder setImmatriculation_id(UUID immatriculation_id){
            this.immatriculation_id = immatriculation_id;
            return this;
        }

        public ImmatriculationBuilder setNum_plaque(String num_plaque) {
            this.num_plaque = num_plaque;
            return this;
        }

        public ImmatriculationBuilder setDateAchat(Date dateAchat) {
            this.dateAchat = dateAchat;
            return this;
        }

        public Immatriculation build(){
            return new Immatriculation(immatriculation_id, num_plaque, dateAchat);
        }
    }

}
