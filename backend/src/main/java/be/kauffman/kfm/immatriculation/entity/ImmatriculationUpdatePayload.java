package be.kauffman.kfm.immatriculation.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ImmatriculationUpdatePayload {
    int immatriculation_id;
    String num_plaque;
}
