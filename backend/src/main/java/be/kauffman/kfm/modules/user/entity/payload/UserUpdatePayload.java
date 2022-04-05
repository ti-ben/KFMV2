package be.kauffman.kfm.modules.user.entity.payload;

import be.kauffman.kfm.modules.address.entity.dto.Address;
import be.kauffman.kfm.modules.grade.entity.dto.Grade;
import be.kauffman.kfm.modules.site.entity.dto.Site;
import be.kauffman.kfm.modules.status.entity.dto.Status;
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
    Site site;
    Address addressList;
    Grade grade;
    Status status;
}
