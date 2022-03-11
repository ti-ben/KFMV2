package be.kauffman.kfm.role.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RoleUpdatePayload {
    UUID role_id;
    String role_name;
    String role_description;
}
