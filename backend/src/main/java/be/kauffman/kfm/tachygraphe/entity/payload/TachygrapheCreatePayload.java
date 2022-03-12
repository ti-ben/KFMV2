package be.kauffman.KFM.tachygraphe.entity.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TachygrapheCreatePayload {
    Date dte_start;
    Date dte_end;
    String num_carte;
    String comment;
}
