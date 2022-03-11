package be.kauffman.kfm.site.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class SiteUpdatePayload {
    UUID site_id;
    String site_nom;
    String site_description;
    String site_adresse;
}
