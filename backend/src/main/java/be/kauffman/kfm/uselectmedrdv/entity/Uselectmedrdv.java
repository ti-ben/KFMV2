package be.kauffman.kfm.uselectmedrdv.entity;

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

public class Uselectmedrdv {
    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(columnDefinition = "BINARY(16)")
    private UUID uselectmedrdv_id;
    Date dte_rdv;
    String price;
    String comment;

    // Pattern

    public static class UselectmedrdvBuilder{
        UUID uselectmedrdv_id;
        Date dte_rdv;
        String price;
        String comment;

        public UselectmedrdvBuilder setUselectmedrdv_id(UUID uselectmedrdv_id) {
            this.uselectmedrdv_id = uselectmedrdv_id;
            return this;
        }

        public UselectmedrdvBuilder setDte_rdv(Date dte_rdv) {
            this.dte_rdv = dte_rdv;
            return this;
        }

        public UselectmedrdvBuilder setPrice(String price) {
            this.price = price;
            return this;
        }

        public UselectmedrdvBuilder setComment(String comment) {
            this.comment = comment;
            return this;
        }

        public Uselectmedrdv build() { return new Uselectmedrdv(uselectmedrdv_id, dte_rdv, price, comment); }
    }

}
