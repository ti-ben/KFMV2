package be.kauffman.kfm.security.entity;

import be.kauffman.kfm.modules.user.entity.dto.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Credential {
    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(columnDefinition = "BINARY(16)")
    private UUID credential_id;
    @Column(unique = true)
    private String username;
    private String email;
    private String password;
    private Boolean actif;
    @OneToOne
    @JoinColumn(name = "user_id_fk",referencedColumnName = "user_id")
    private User user;

    public Credential(String username, String email, String password, Boolean actif) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.actif = actif;
    }

    public static class Builder {

        private String username;
        private String email;
        private String password;
        private Boolean actif;

        public Builder setUsername(String username) {
            this.username = username;
            return this;
        }

        public Builder setEmail(String email) {
            this.email = email;
            return this;
        }

        public Builder setPassword(String password) {
            this.password = password;
            return this;
        }

        public Builder setActif(boolean actif) {
            this.actif = actif;
            return this;
        }

        public Credential build() {
            return new Credential(username, email, password, actif);
        }
    }
}
