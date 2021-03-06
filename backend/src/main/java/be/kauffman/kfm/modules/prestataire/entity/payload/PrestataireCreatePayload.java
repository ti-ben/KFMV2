package be.kauffman.kfm.modules.prestataire.entity.payload;

import be.kauffman.kfm.modules.address.entity.dto.Address;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PrestataireCreatePayload {
    String name;
    String tel;
    String email;
    String role;
    String service;
    Address address;
}
