package be.kauffman.KFM.utachygraphe.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class UtachygrapheUpdatePayload {
    UUID utachygraphe_id;
    Date dte_start;
    Date dte_end;
    String num_carte;
    String comment;
}
