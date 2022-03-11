package be.kauffman.kfm.vadr.entity;

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
public class Vadr {

    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(columnDefinition = "BINARY(16)")
    private UUID vadr_id;
    Date dte_start;
    Date dte_end;
    String comment;

    public static class VadrBuilder {
        UUID vadr_id;
        Date dte_start;
        Date dte_end;
        String comment = "Pas de commentaire";

        public VadrBuilder setVadr_id(UUID vadr_id) {
            this.vadr_id = vadr_id;
            return this;
        }

        public VadrBuilder setDte_start(Date dte_start) {
            this.dte_start = dte_start;
            return this;
        }

        public VadrBuilder setDte_end(Date dte_end) {
            this.dte_end = dte_end;
            return this;
        }

        public VadrBuilder setComment(String comment) {
            this.comment = comment;
            return this;
        }

        public Vadr build() {
            return new Vadr(vadr_id, dte_start, dte_end, comment);
        }
    }
}
