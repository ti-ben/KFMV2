package be.kauffman.KFM.ucaprdv.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class UcaprdvCreatePayload {
    Date dte_start;
    Date dte_end;
    String price;
    String theme;
    String comment;
}
