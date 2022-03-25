package be.kauffman.kfm.security.service;

import be.kauffman.kfm.modules.user.entity.dto.User;
import be.kauffman.kfm.security.entity.Credential;

public interface CredentialService {
    Credential saveCredential(Credential credential);

    Credential findCredentialByUsername(String username);
}
