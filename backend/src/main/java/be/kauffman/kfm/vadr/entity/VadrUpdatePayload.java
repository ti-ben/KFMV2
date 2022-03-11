package be.kauffman.kfm.vadr.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor


public class VadrUpdatePayload {
    UUID vadr_id;
    Date dte_start;
    Date dte_end;
    String comment;
}
