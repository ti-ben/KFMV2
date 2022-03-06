package be.kauffman.KFM.prestataire.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PrestataireUpdatePayload {
    UUID prestataire_id;
    String prestataire_name;
    String prestataire_tel;
    String prestataire_email;
    String prestataire_adresse;
    String prestataire_role;
}
