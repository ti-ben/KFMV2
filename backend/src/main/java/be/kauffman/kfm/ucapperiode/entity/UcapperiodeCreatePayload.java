package be.kauffman.kfm.ucapperiode.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
@Data
@AllArgsConstructor
@NoArgsConstructor

public class UcapperiodeCreatePayload {
    Date dte_start;
    Date dte_end;
}
