package be.kauffman.KFM.metrologie.entity.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MetrologieUpdatePayload {
    UUID metrologie_id;
    Date start_date;
    Date end_date;
    String price;
    String comment;
}
