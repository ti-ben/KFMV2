package be.kauffman.KFM.immatriculation.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ImmatriculationCreatePayload {
    String num_plaque;
}
