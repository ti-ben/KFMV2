package be.kauffman.kfm.security.service;

import be.kauffman.kfm.security.entity.Credential;
import be.kauffman.kfm.security.repository.CredentialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Transactional
@Service
public class CredentialServiceImpl implements CredentialService {

    @Autowired
    CredentialRepository credentialRepository;

    @Override
    public Credential saveCredential(Credential credential) {
        return credentialRepository.save(credential);
    }

    @Override
    public Credential findCredentialByUsername(String username) {
        return credentialRepository.findByUsername(username);
    }
}
