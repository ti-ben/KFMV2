package be.kauffman.kfm.numberplate.entity.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class NumberplateUpdatePayload {
    UUID numberplate_id;
    String num_plate;
    Date dop;
}
