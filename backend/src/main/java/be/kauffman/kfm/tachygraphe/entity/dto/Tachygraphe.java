package be.kauffman.KFM.tachygraphe.entity.dto;

import be.kauffman.KFM.user.entity.dto.User;
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

public class Tachygraphe {
    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(columnDefinition = "BINARY(16)")
    private UUID tachygraphe_id;
    Date start_date;
    Date end_date;
    String num_carte;
    String comment;

    @ManyToOne()
    @JoinColumn(name = "user_id_fk", referencedColumnName = "user_id")
    User user;
}
