package be.kauffman.KFM.period.entity.builder;

import be.kauffman.KFM.period.entity.dto.Period;
import java.util.Date;
import java.util.UUID;

public class PeriodBuilder {
    UUID period_id;
    Date start_date;
    Date end_date;

    public PeriodBuilder setPeriod_id(UUID period_id) {
        this.period_id = period_id;
        return this;
    }

    public PeriodBuilder setStart_date(Date start_date) {
        this.start_date = start_date;
        return this;
    }

    public PeriodBuilder setEnd_date(Date end_date) {
        this.end_date = end_date;
        return this;
    }

    public Period build() { return new Period(); }
}
