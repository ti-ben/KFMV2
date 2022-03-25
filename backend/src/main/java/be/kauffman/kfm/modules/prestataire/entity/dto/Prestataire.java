package be.kauffman.kfm.modules.prestataire.entity.dto;

import be.kauffman.kfm.modules.address.entity.dto.Address;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Prestataire {
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name = "prestataire_id", updatable = false, nullable = false)
    private UUID prestataire_id;
    String name;
    String tel;
    String email;
    String service;

    @OneToOne()
    @JoinColumn(name = "address_id_fk", referencedColumnName = "address_id")
    Address addressList;
}
