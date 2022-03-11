package be.kauffman.kfm.uadrrdv.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class UadrrdvUpdatePayload {
    UUID uadrrdv_id;
    Date dte_rdv;
    String category;
    String comment;
}
