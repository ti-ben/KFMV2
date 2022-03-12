package be.kauffman.KFM.prestataire.entity.payload;

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
}
