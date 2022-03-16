package be.kauffman.kfm.tachygraphe.entity.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class TachygrapheUpdatePayload {
    UUID utachygraphe_id;
    Date start_date;
    Date end_date;
    String num_carte;
    String comment;
}
