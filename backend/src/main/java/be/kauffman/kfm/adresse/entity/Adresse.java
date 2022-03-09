package be.kauffman.KFM.adresse.entity;

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
public class Adresse {
    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(columnDefinition = "BINARY(16)")
    private UUID adresse_id;
    private String road;
    private String cp;
    private String town;
    private String country;
    private String num;

    // Pattern

    public static class AdresseBuilder{
        UUID adresse_id;
        String road;
        String cp;
        String town;
        String country;
        String num;

        public AdresseBuilder setAdresse_id(UUID adresse_id) {
            this.adresse_id = adresse_id;
            return this;
        }

        public AdresseBuilder setRoad(String road) {
            this.road = road;
            return this;
        }

        public AdresseBuilder setCp(String cp) {
            this.cp = cp;
            return this;
        }

        public AdresseBuilder setTown(String town) {
            this.town = town;
            return this;
        }

        public AdresseBuilder setCountry(String country) {
            this.country = country;
            return this;
        }

        public AdresseBuilder setNum(String num) {
            this.num = num;
            return this;
        }

        public Adresse build() { return new Adresse(adresse_id, road, cp, town, country, num); }
    }
}
