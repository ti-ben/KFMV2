package be.kauffman.kfm.uselectmedperiode.entity;

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
public class Uselectmedperiode {
    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(columnDefinition = "BINARY(16)")
    private UUID uselectmedperiode_id;
    Date dte_start;
    Date dte_end;

    // Pattern

    public static class UselectmedperiodeBuilder{
        UUID uselectmedperiode_id;
        Date dte_start;
        Date dte_end;

        public UselectmedperiodeBuilder setUselectmedperiode_id(UUID uselectmedperiode_id) {
            this.uselectmedperiode_id = uselectmedperiode_id;
            return this;
        }

        public UselectmedperiodeBuilder setDte_start(Date dte_start) {
            this.dte_start = dte_start;
            return this;
        }

        public UselectmedperiodeBuilder setDte_end(Date dte_end) {
            this.dte_end = dte_end;
            return this;
        }

        public Uselectmedperiode build() { return new Uselectmedperiode(uselectmedperiode_id, dte_start, dte_end); }
    }
}
