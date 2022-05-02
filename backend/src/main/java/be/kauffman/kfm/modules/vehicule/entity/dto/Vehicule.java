package be.kauffman.kfm.modules.vehicule.entity.dto;

import be.kauffman.kfm.modules.numberplate.entity.dto.Numberplate;
import be.kauffman.kfm.modules.site.entity.dto.Site;
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

public class Vehicule {
    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(columnDefinition = "BINARY(16)")
    private UUID vehicule_id;
    Date dop;
    Boolean active;
    String price;
    String num_chassis;
    String brand;
    String cde_carrosserie;
    String genre;
    String mom;
    String mma;
    String mmat;
    String mta;
    String classe_enviro;
    String nbr_km;
    String metrologie;
    String picture;
    String fuel;
    String type;

    @OneToOne()
    @JoinColumn(name = "numberplate_id_fk", referencedColumnName = "numberplate_id")
    Numberplate numberplate;

    @ManyToOne()
    @JoinColumn(name = "site_id_fk", referencedColumnName = "site_id")
    Site site;
}