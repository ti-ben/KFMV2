package be.kauffman.KFM.tachygraphe.entity.builder;

import be.kauffman.KFM.tachygraphe.entity.dto.Tachygraphe;
import be.kauffman.KFM.user.entity.dto.User;

import java.util.Date;
import java.util.UUID;

public class TachygrapheBuilder{
    UUID tachygraphe_id;
    Date dte_start;
    Date dte_end;
    String num_carte;
    String comment;
    User user;

    public TachygrapheBuilder setTachygraphe_id(UUID tachygraphe_id) {
        this.tachygraphe_id = tachygraphe_id;
        return this;
    }

    public TachygrapheBuilder setDte_start(Date dte_start) {
        this.dte_start = dte_start;
        return this;
    }

    public TachygrapheBuilder setDte_end(Date dte_end) {
        this.dte_end = dte_end;
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

    public Tachygraphe build() { return new Tachygraphe(tachygraphe_id, dte_start, dte_end, num_carte, comment, user); }
}
