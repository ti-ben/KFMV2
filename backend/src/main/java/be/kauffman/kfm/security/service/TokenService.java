package be.kauffman.kfm.security.service;

import be.kauffman.kfm.security.entity.TokenResponse;

public interface TokenService {
    TokenResponse getRefreshToken(String refresh_token);
    TokenResponse getToken(String username, String password);
}
