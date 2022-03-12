package be.kauffman.kfm.address.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AdresseUpdatePayload {
    UUID adresse_id;
    String road;
    String cp;
    String town;
    String country;
    String num;
}
