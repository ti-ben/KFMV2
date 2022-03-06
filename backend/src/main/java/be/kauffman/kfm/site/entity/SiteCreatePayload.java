package be.kauffman.KFM.site.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SiteCreatePayload {
    String site_nom;
    String site_description;
    String site_adresse;
}
