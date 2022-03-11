package be.kauffman.kfm.utachygraphe.entity;

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

public class Utachygraphe {
    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(columnDefinition = "BINARY(16)")
    private UUID utachygraphe_id;
    Date dte_start;
    Date dte_end;
    String num_carte;
    String comment;

    // Pattern

    public static class UtachygrapheBuilder{
        UUID utachygraphe_id;
        Date dte_start;
        Date dte_end;
        String num_carte;
        String comment;

        public UtachygrapheBuilder setUtachygraphe_id(UUID utachygraphe_id) {
            this.utachygraphe_id = utachygraphe_id;
            return this;
        }

        public UtachygrapheBuilder setDte_start(Date dte_start) {
            this.dte_start = dte_start;
            return this;
        }

        public UtachygrapheBuilder setDte_end(Date dte_end) {
            this.dte_end = dte_end;
            return this;
        }

        public UtachygrapheBuilder setNum_carte(String num_carte) {
            this.num_carte = num_carte;
            return this;
        }

        public UtachygrapheBuilder setComment(String comment) {
            this.comment = comment;
            return this;
        }

        public Utachygraphe build() { return new Utachygraphe(utachygraphe_id, dte_start, dte_end, num_carte, comment); }
    }
}
