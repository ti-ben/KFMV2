package be.kauffman.KFM.site.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SiteUpdatePayload {
    UUID site_id;
    String site_name;
    String site_description;
    String site_adresse;
}
