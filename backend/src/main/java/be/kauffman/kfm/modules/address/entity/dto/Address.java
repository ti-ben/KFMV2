package be.kauffman.kfm.modules.address.entity.dto;

        import lombok.AllArgsConstructor;
        import lombok.Data;
        import lombok.NoArgsConstructor;
        import org.hibernate.annotations.GenericGenerator;

        import javax.persistence.Column;
        import javax.persistence.Entity;
        import javax.persistence.GeneratedValue;
        import javax.persistence.Id;
        import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity

public class Address {
    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(columnDefinition = "BINARY(16)")
    private UUID address_id;
    private String road;
    private String cp;
    private String town;
    private String country;
    private String num;
}
