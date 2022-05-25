package be.kauffman.kfm.modules.tachygraphe.entity.payload;

import be.kauffman.kfm.modules.user.entity.dto.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class TachygrapheCreatePayload {
    Date start_date;
    Date end_date;
    String num_carte;
    String comment;
    User user;
}
