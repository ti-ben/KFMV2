package be.kauffman.KFM.period.entity.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class PeriodUpdatePayload {
    UUID period_id;
    Date start_date;
    Date end_date;
}
