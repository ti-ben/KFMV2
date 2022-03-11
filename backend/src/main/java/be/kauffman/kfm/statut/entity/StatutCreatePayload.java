package be.kauffman.kfm.statut.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StatutCreatePayload {
    String statut_nom;
    String statut_description;
}
