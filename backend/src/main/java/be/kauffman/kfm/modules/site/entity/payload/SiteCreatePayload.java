package be.kauffman.kfm.modules.site.entity.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SiteCreatePayload {
    String name;
    String description;
}
