package be.kauffman.kfm.vmetrologie.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class VmetrologieUpdatePayload {
    UUID vmetrologie_id;
    Date dte_start;
    Date dte_end;
    String price;
    String comment;
}
