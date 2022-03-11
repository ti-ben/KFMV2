package be.kauffman.kfm.ucapperiode.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class UcapperiodeUpdatePayload {
    UUID ucapperiode_id;
    Date dte_start;
    Date dte_end;
}
