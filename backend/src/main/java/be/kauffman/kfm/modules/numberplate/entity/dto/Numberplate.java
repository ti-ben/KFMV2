package be.kauffman.kfm.modules.numberplate.entity.dto;

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
public class Numberplate {
    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(columnDefinition = "BINARY(16)")
    UUID numberplate_id;
    String num_plate;
    Date dop;
    String active;

    @OneToOne()
    @JoinColumn(name = "site_id_fk", referencedColumnName = "site_id")
    Site site;
}
