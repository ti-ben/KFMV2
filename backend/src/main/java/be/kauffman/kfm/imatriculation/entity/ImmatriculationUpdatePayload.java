package be.kauffman.kfm.imatriculation.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ImmatriculationUpdatePayload {
    UUID imatriculation_id;
    String numero;

}
