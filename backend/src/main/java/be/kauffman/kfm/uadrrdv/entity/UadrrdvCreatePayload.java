package be.kauffman.kfm.uadrrdv.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class UadrrdvCreatePayload {
    Date dte_rdv;
    String category;
    String comment;
}
