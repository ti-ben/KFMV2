package be.kauffman.KFM.uadrperiode.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class UadrperiodeCreatePayload {
    Date dte_start;
    Date dte_end;

}
