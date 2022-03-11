package be.kauffman.kfm.ucaprdv.entity;

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

public class Ucaprdv {
    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(columnDefinition = "BINARY(16)")
    private UUID ucaprdv_id;
    Date dte_start;
    Date dte_end;
    String price;
    String theme;
    String comment;

    public static class UcaprdvBuilder{
        UUID ucaprdv_id;
        Date dte_start;
        Date dte_end;
        String price;
        String theme;
        String comment;

        public UcaprdvBuilder setUcaprdv_id(UUID ucaprdv_id) {
            this.ucaprdv_id = ucaprdv_id;
            return this;
        }

        public UcaprdvBuilder setDte_start(Date dte_start) {
            this.dte_start = dte_start;
            return this;
        }

        public UcaprdvBuilder setDte_end(Date dte_end) {
            this.dte_end = dte_end;
            return this;
        }

        public UcaprdvBuilder setPrice(String price) {
            this.price = price;
            return this;
        }

        public UcaprdvBuilder setTheme(String theme) {
            this.theme = theme;
            return this;
        }

        public UcaprdvBuilder setComment(String comment) {
            this.comment = comment;
            return this;
        }

        public Ucaprdv build() { return new Ucaprdv(ucaprdv_id, dte_start, dte_end, price, theme, comment); }
    }

}
