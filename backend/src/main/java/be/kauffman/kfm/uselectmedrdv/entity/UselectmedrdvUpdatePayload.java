package be.kauffman.KFM.uselectmedrdv.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class UselectmedrdvUpdatePayload {
    UUID uselectmedrdv_id;
    Date dte_rdv;
    String price;
    String comment;
}
