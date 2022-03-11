package be.kauffman.kfm.immatriculation.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Date;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Immatriculation {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int  immatriculation_id;
    String num_plaque;
    Date dateAchat;

    // Pattern

    public static class ImmatriculationBuilder{
        int immatriculation_id;
        String num_plaque   = "no-numero";
        Date dateAchat      = new Date();

        public ImmatriculationBuilder setImmatriculation_id(int immatriculation_id){
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
