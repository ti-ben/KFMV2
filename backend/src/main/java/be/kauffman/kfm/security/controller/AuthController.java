package be.kauffman.kfm.security.controller;

import be.kauffman.kfm.common.entity.ApiResponse;
import be.kauffman.kfm.security.entity.Credential;
import be.kauffman.kfm.security.entity.RefreshTokenRequest;
import be.kauffman.kfm.security.entity.SignupRequest;
import be.kauffman.kfm.security.repository.CredentialRepository;
import be.kauffman.kfm.security.service.CredentialService;
import be.kauffman.kfm.security.service.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.HashMap;

@CrossOrigin(origins = "*", maxAge = 3600)
@EnableResourceServer
@RestController
@RequestMapping("/account")
public class AuthController {
    @Autowired
    CredentialService credentialService;
    @Autowired
    TokenService tokenService;
    @Autowired
    CredentialRepository credentialRepository;
    @Autowired
    PasswordEncoder encoder;

    @GetMapping("/me")
    public ApiResponse get(final Principal principal) {
        return new ApiResponse(true, credentialRepository.findByUsername(principal.getName()), null);
    }

    @PostMapping("/signin")
    public ApiResponse signin(@RequestBody SignupRequest request) {
        ApiResponse response = request.isValid();
        if (response.isResult()) {
            Credential credential = credentialRepository.findByUsername(request.getEmail());
            if (credential != null && encoder.matches(request.getPassword(), credential.getPassword())) {
                HashMap<String, Object> hmap = new HashMap<String, Object>();
                hmap.put("user", credential);
                hmap.put("token", this.tokenService.getToken(request.getEmail(), request.getPassword()));
                return new ApiResponse(true, hmap, null);
            } else {
                return new ApiResponse(false, null, "api.signin.bad-credentials");
            }
        } else {
            return response;
        }
    }


    @PostMapping("/signup")
    public ApiResponse signup(@RequestBody SignupRequest request) {
        ApiResponse response = request.isValid();
        if (response.isResult()) {
            if (credentialRepository.existsByUsername(request.getEmail())) {
                return new ApiResponse(false, null, "api.signup.email-exist");
            } else {
                try {
                    Credential credential = credentialService.saveCredential(new Credential.Builder()
                            .setUsername(request.getEmail())
                            .setEmail(request.getEmail())
                            .setPassword(encoder.encode(request.getPassword()))
                            .setActif(true)
                            .build());
                    return new ApiResponse(true, credential, null);
                } catch (Exception e) {
                    e.printStackTrace();
                    return new ApiResponse(false, null, "api.signup.database-insert-error");
                }
            }
        } else {
            return response;
        }
    }

    @PostMapping("/refresh")
    public ApiResponse refresh(@RequestBody RefreshTokenRequest refresh) {
        try {
            return new ApiResponse(true, tokenService.getRefreshToken(refresh.getRefresh()), null);
        } catch (Exception e) {
            return new ApiResponse(false, null, e.getMessage());
        }
    }
}
