package be.kauffman.kfm.modules.user.entity.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserUpdatePayload {
    UUID user_id;
    String firstname;
    String lastname;
    String gender;
    String avatar;
    Date dob;
    String email;
    String password;
    String telpro;
    String telperso;
    String nationality;
    String numirn;
    String driver_license;
    Date created_on;
    String pob;
    String active;
}
