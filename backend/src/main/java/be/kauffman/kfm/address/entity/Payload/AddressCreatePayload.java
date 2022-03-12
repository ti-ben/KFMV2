package be.kauffman.KFM.address.entity.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class AddressCreatePayload {
    String road;
    String cp;
    String town;
    String country;
    String num;
}
