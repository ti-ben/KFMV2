package be.kauffman.KFM.vintervtech.entity;

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

public class Vintervtech {
    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(columnDefinition = "BINARY(16)")
    private UUID vintervtech_id;
    Date dte_start;
    Date dte_end;
    String price;
    String comment;

    // Pattern

    public static class VintervtechBuilder{
        UUID vintervtech_id;
        Date dte_start;
        Date dte_end;
        String price;
        String comment;

        public VintervtechBuilder setVintervtech_id(UUID vintervtech_id) {
            this.vintervtech_id = vintervtech_id;
            return this;
        }

        public VintervtechBuilder setDte_start(Date dte_start) {
            this.dte_start = dte_start;
            return this;
        }

        public VintervtechBuilder setDte_end(Date dte_end) {
            this.dte_end = dte_end;
            return this;
        }

        public VintervtechBuilder setPrice(String price) {
            this.price = price;
            return this;
        }

        public VintervtechBuilder setComment(String comment) {
            this.comment = comment;
            return this;
        }

        public Vintervtech build() { return new Vintervtech(vintervtech_id, dte_start, dte_end, price, comment); }
    }
}
