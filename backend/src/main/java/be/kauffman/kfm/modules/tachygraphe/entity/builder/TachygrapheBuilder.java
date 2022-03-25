package be.kauffman.kfm.modules.tachygraphe.entity.builder;

import be.kauffman.kfm.modules.tachygraphe.entity.dto.Tachygraphe;
import be.kauffman.kfm.modules.user.entity.dto.User;

import java.util.Date;
import java.util.UUID;

public class TachygrapheBuilder{
    UUID tachygraphe_id;
    Date start_date;
    Date end_date;
    String num_carte;
    String comment;
    User user;

    public TachygrapheBuilder setTachygraphe_id(UUID tachygraphe_id) {
        this.tachygraphe_id = tachygraphe_id;
        return this;
    }

    public TachygrapheBuilder setStart_date(Date start_date) {
        this.start_date = start_date;
        return this;
    }

    public TachygrapheBuilder setEnd_date(Date end_date) {
        this.end_date = end_date;
        return this;
    }

    public TachygrapheBuilder setNum_carte(String num_carte) {
        this.num_carte = num_carte;
        return this;
    }

    public TachygrapheBuilder setComment(String comment) {
        this.comment = comment;
        return this;
    }

    public TachygrapheBuilder setUser(User user) {
        this.user = user;
        return this;
    }

    public Tachygraphe build() { return new Tachygraphe(tachygraphe_id, start_date, end_date, num_carte, comment, user); }
}
