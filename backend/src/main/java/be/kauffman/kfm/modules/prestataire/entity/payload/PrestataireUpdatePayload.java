package be.kauffman.kfm.modules.prestataire.entity.payload;

import be.kauffman.kfm.modules.address.entity.dto.Address;
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
    String active;
    Address address;
}
