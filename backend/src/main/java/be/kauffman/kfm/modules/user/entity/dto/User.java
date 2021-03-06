package be.kauffman.kfm.modules.user.entity.dto;

import be.kauffman.kfm.modules.address.entity.dto.Address;
import be.kauffman.kfm.modules.grade.entity.dto.Grade;
import be.kauffman.kfm.modules.site.entity.dto.Site;
import be.kauffman.kfm.modules.status.entity.dto.Status;
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

public class User {
    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(columnDefinition = "BINARY(16)")
    private UUID user_id;
    String firstname;
    String lastname;
    String gender;
    String avatar;
    Date dob;
    String email;
    String telpro;
    String telperso;
    String nationality;
    String numirn;
    String driver_license;
    Date created_on;
    String pob;
    String active;

    @ManyToOne()
    @JoinColumn(name = "site_id_fk", referencedColumnName = "site_id")
    Site site;

    @OneToOne()
    @JoinColumn(name = "address_id_fk", referencedColumnName = "address_id")
    Address address;

    @ManyToOne()
    @JoinColumn(name = "grade_id_fk", referencedColumnName = "grade_id")
    Grade grade;

    @ManyToOne()
    @JoinColumn(name = "status_id_fk", referencedColumnName = "status_id")
    Status status;
}