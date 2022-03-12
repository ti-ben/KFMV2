package be.kauffman.KFM.site.entity.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class SiteUpdatePayload {
    UUID site_id;
    String name;
    String description;
}
