package be.kauffman.KFM.uselectmedrdv.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class UselectmedrdvCreatePayload {
    Date dte_rdv;
    String price;
    String comment;
}
