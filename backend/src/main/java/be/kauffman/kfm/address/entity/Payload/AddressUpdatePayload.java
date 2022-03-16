package be.kauffman.kfm.address.entity.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AddressUpdatePayload {
    UUID adresse_id;
    String road;
    String cp;
    String town;
    String country;
    String num;
}
