package be.kauffman.KFM.metrologie.entity.builder;

import be.kauffman.KFM.metrologie.entity.dto.Metrologie;

import java.util.Date;
import java.util.UUID;

public class MetrologieBuilder{
    UUID metrologie_id;
    Date start_date;
    Date end_date;
    String price;
    String comment;

    public MetrologieBuilder setMetrologie_id(UUID metrologie_id) {
        this.metrologie_id = metrologie_id;
        return this;
    }

    public MetrologieBuilder setStart_date(Date start_date) {
        this.start_date = start_date;
        return this;
    }

    public MetrologieBuilder setEnd_date(Date end_date) {
        this.end_date = end_date;
        return this;
    }

    public MetrologieBuilder setPrice(String price) {
        this.price = price;
        return this;
    }

    public MetrologieBuilder setComment(String comment) {
        this.comment = comment;
        return this;
    }

    public Metrologie build() { return new Metrologie(metrologie_id, start_date, end_date, price, comment); }
}