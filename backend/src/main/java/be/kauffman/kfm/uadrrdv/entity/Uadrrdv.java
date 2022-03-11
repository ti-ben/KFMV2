package be.kauffman.kfm.uadrrdv.entity;

import be.kauffman.kfm.uadrperiode.entity.Uadrperiode;
import be.kauffman.kfm.utilisateur.entity.Utilisateur;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Date;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity

public class Uadrrdv {
    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(columnDefinition = "BINARY(16)")
    private UUID uadrrdv_id;
    Date dte_rdv;
    String category;
    String comment;

//    @ManyToMany()
//    @JoinColumn(name = "utilisateur_id_fk", referencedColumnName = "utilisateur_id")
//    Utilisateur utilisateur;
//
//    @OneToMany
//    @JoinColumn(name = "uadrperiode_id_fk", referencedColumnName = "uadrperiode_id")
//    Uadrperiode uadrperiode;

    // Pattern
    public static class UadrrdvBuilder{
        UUID uadrrdv_id;
        Date dte_rdv;
        String category;
        String comment;

        public UadrrdvBuilder setDte_rdv(Date dte_rdv) {
            this.dte_rdv = dte_rdv;
            return this;
        }

        public UadrrdvBuilder setUadrrdv_id(UUID uadrrdv_id) {
            this.uadrrdv_id = uadrrdv_id;
            return this;
        }

        public UadrrdvBuilder setCategory(String category) {
            this.category = category;
            return this;
        }

        public UadrrdvBuilder setComment(String comment) {
            this.comment = comment;
            return this;
        }

        public Uadrrdv build() { return new Uadrrdv(uadrrdv_id, dte_rdv, category, comment); }
    }
}
