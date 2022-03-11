package be.kauffman.kfm.vintervtech.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class VintervtechCreatePayload {
    Date dte_start;
    Date dte_end;
    String price;
    String comment;
}
