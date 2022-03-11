package be.kauffman.kfm.ucaprdv.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Date;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class UcaprdvUpdatePayload {
    UUID ucaprdv_id;
    Date dte_start;
    Date dte_end;
    String price;
    String theme;
    String comment;
}