package be.kauffman.KFM.metrologie.entity.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MetrologieCreatePayload {
    Date start_date;
    Date end_date;
    String price;
    String comment;
}
