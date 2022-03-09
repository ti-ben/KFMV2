package be.kauffman.KFM.site.entity;

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

public class Site {
    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(columnDefinition = "BINARY(16)")
    private UUID site_id;
    String site_nom;
    String site_description;
    String site_adresse;
    Date site_cree_le;

    // Pattern

    public static class SiteBuilder{
        UUID site_id;
        String site_nom = "Pas de nom de site";
        String site_description = "pas de description";
        String site_adresse = "pas d'adresse";
        Date site_cree_le = new Date();

        public SiteBuilder setSite_id(UUID site_id) {
            this.site_id = site_id;
            return this;
        }

        public SiteBuilder setSite_nom(String site_nom) {
            this.site_nom = site_nom;
            return this;
        }

        public SiteBuilder setSite_description(String site_description) {
            this.site_description = site_description;
            return this;
        }

        public SiteBuilder setSite_adresse(String site_adresse) {
            this.site_adresse = site_adresse;
            return this;
        }

        public SiteBuilder setSite_cree_le(Date site_cree_le) {
            this.site_cree_le = site_cree_le;
            return this;
        }

        public Site build() { return new Site(site_id, site_nom, site_description, site_adresse, site_cree_le); }
    }
}
