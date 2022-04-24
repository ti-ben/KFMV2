package be.kauffman.kfm.modules.site.entity.payload;

import be.kauffman.kfm.modules.address.entity.dto.Address;
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
    Boolean active;
    Address addressList;
}
