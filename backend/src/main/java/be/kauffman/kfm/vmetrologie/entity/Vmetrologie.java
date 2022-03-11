package be.kauffman.kfm.vmetrologie.entity;

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
public class Vmetrologie {
    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(columnDefinition = "BINARY(16)")
    private UUID vmetrologie_id;
    Date dte_start;
    Date dte_end;
    String price;
    String comment;

    // Pattern

    public static class VmetrologieBuilder{
        UUID vmetrologie_id;
        Date dte_start;
        Date dte_end;
        String price;
        String comment;

        public VmetrologieBuilder setVmetrologie_id(UUID vmetrologie_id) {
            this.vmetrologie_id = vmetrologie_id;
            return this;
        }

        public VmetrologieBuilder setDte_start(Date dte_start) {
            this.dte_start = dte_start;
            return this;
        }

        public VmetrologieBuilder setDte_end(Date dte_end) {
            this.dte_end = dte_end;
            return this;
        }

        public VmetrologieBuilder setPrice(String price) {
            this.price = price;
            return this;
        }

        public VmetrologieBuilder setComment(String comment) {
            this.comment = comment;
            return this;
        }

        public Vmetrologie build() { return new Vmetrologie(vmetrologie_id, dte_start, dte_end, price, comment); }
    }
}
