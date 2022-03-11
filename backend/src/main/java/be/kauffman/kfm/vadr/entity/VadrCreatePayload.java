package be.kauffman.kfm.vadr.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class VadrCreatePayload {
    Date dte_start;
    Date dte_end;
    String comment;
}
