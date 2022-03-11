package be.kauffman.kfm.statut.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StatutUpdatePayload {
    UUID statut_id;
    String statut_nom;
    String statut_description;
}
