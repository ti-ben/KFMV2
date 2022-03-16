package be.kauffman.kfm.prestataire.entity.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PrestataireUpdatePayload {
    UUID prestataire_id;
    String name;
    String tel;
    String email;
    String service;
}
