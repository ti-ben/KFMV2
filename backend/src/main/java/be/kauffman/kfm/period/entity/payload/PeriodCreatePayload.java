package be.kauffman.KFM.period.entity.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class PeriodCreatePayload {
    Date start_date;
    Date end_date;
}
