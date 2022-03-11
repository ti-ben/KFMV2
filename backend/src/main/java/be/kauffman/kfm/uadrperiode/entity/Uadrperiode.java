package be.kauffman.kfm.uadrperiode.entity;

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

public class Uadrperiode {
    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(columnDefinition = "BINARY(16)")
    private UUID uadrperiode_id;
    Date dte_start;
    Date dte_end;

    // Pattern

    public static class UadrperiodeBuilder{
        UUID uadrperiode_id;
        Date dte_start;
        Date dte_end;

        public UadrperiodeBuilder setUadrperiode_id(UUID uadrperiode_id) {
            this.uadrperiode_id = uadrperiode_id;
            return this;
        }

        public UadrperiodeBuilder setDte_start(Date dte_start) {
            this.dte_start = dte_start;
            return this;
        }

        public UadrperiodeBuilder setDte_end(Date dte_end) {
            this.dte_end = dte_end;
            return this;
        }

        public Uadrperiode build() { return new Uadrperiode(uadrperiode_id, dte_start, dte_end); }
    }
}
