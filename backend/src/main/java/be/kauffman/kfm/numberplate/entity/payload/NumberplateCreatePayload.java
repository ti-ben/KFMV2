package be.kauffman.kfm.numberplate.entity.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class NumberplateCreatePayload {
    String num_plate;
    Date dop;
}
