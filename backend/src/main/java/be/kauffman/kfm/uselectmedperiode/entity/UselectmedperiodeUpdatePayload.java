package be.kauffman.KFM.uselectmedperiode.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UselectmedperiodeUpdatePayload {
    UUID uselectmedperiode_id;
    Date dte_start;
    Date dte_end;
}
