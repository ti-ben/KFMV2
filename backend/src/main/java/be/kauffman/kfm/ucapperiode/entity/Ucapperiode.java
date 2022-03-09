package be.kauffman.KFM.ucapperiode.entity;

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

public class Ucapperiode {
    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(columnDefinition = "BINARY(16)")
    private UUID ucapperiode_id;
    Date dte_start;
    Date dte_end;

    // Pattern

    public static class UcapperiodeBuilder{
        UUID ucapperiode_id;
        Date dte_start;
        Date dte_end;

        public UcapperiodeBuilder setUcapperiode_id(UUID ucapperiode_id) {
            this.ucapperiode_id = ucapperiode_id;
            return this;
        }

        public UcapperiodeBuilder setDte_start(Date dte_start) {
            this.dte_start = dte_start;
            return this;
        }

        public UcapperiodeBuilder setDte_end(Date dte_end) {
            this.dte_end = dte_end;
            return this;
        }

        public Ucapperiode build() { return new Ucapperiode(ucapperiode_id, dte_start, dte_end); }
    }
}
