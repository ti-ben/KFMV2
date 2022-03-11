package be.kauffman.kfm.vctrltech.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class VctrltechCreatePayload {
    Date dte_start;
    Date dte_end;
    String price;
    String comment;
}