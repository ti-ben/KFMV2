package be.kauffman.KFM.vctrltech.entity;

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

public class Vctrltech {
    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(columnDefinition = "BINARY(16)")
    private UUID vctrltech_id;
    Date dte_start;
    Date dte_end;
    String price;
    String comment;

    // Pattern

    public static class VctrltechBuilder{
        UUID vctrltech_id;
        Date dte_start;
        Date dte_end;
        String price;
        String comment;

        public VctrltechBuilder setVctrltech_id(UUID vctrltech_id) {
            this.vctrltech_id = vctrltech_id;
            return this;
        }

        public VctrltechBuilder setDte_start(Date dte_start) {
            this.dte_start = dte_start;
            return this;
        }

        public VctrltechBuilder setDte_end(Date dte_end) {
            this.dte_end = dte_end;
            return this;
        }

        public VctrltechBuilder setPrice(String price) {
            this.price = price;
            return this;
        }

        public VctrltechBuilder setComment(String comment) {
            this.comment = comment;
            return this;
        }

        public Vctrltech build() { return new Vctrltech(vctrltech_id, dte_start, dte_end, price, comment); }
    }
}
