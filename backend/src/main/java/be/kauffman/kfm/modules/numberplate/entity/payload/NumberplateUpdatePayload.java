package be.kauffman.kfm.modules.numberplate.entity.payload;

import be.kauffman.kfm.modules.site.entity.dto.Site;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class NumberplateUpdatePayload {
    UUID numberplate_id;
    String num_plate;
    Date dop;
    String active;
    Site site;
}
