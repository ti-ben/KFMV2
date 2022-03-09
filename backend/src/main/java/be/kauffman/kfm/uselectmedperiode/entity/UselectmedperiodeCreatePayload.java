package be.kauffman.KFM.uselectmedperiode.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UselectmedperiodeCreatePayload {
    Date dte_start;
    Date dte_end;
}
