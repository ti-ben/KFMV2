package be.kauffman.KFM.adresse.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AdresseCreatePayload {
    String road;
    String cp;
    String town;
    String country;
    String num;
}
