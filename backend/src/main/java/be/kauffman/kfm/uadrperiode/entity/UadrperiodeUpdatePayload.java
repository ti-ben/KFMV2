package be.kauffman.kfm.uadrperiode.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class UadrperiodeUpdatePayload {
    UUID uadrperiode_id;
    Date dte_start;
    Date dte_end;

}
