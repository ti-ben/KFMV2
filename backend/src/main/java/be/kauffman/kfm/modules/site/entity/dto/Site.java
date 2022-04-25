package be.kauffman.kfm.modules.site.entity.dto;

import be.kauffman.kfm.modules.address.entity.dto.Address;
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

public class Site {
    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(columnDefinition = "BINARY(16)")
    private UUID site_id;
    String name;
    String description;
    Date created_on;
    String active;

    @OneToOne()
    @JoinColumn(name = "address_id_fk", referencedColumnName = "address_id")
    Address addressList;
}
