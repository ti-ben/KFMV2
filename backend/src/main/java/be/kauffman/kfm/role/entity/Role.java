package be.kauffman.kfm.role.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Role {
    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(columnDefinition = "BINARY(16)")
    private UUID role_id;
    String role_name;
    String role_description;

    // Pattern

    public static class RoleBuilder{
        UUID role_id;
        String role_name = "pas de nom";
        String role_description = "pas de description";

        public RoleBuilder setRole_id(UUID role_id) {
            this.role_id = role_id;
            return this;
        }

        public RoleBuilder setRole_name(String role_name) {
            this.role_name = role_name;
            return this;
        }

        public RoleBuilder setRole_description(String role_description) {
            this.role_description = role_description;
            return this;
        }
        public Role build() { return new Role(role_id, role_name, role_description); }
    }
}
