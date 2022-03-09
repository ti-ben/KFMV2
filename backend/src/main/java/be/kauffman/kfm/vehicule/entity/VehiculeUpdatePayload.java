package be.kauffman.KFM.vehicule.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class VehiculeUpdatePayload {
    UUID vehicule_id;
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
}
