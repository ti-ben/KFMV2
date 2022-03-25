package be.kauffman.kfm.security.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TokenResponse {
    private String access_token;
    private String token_type;
    private String refresh_token;
    private int expires_in;

    public TokenResponse(String result) {
        String[] arr = result.split(",");
        this.access_token = arr[0].substring(arr[0].indexOf(":") + 2, arr[0].length() - 1);
        this.token_type = arr[1].substring(arr[1].indexOf(":") + 2, arr[1].length() - 1);
        this.refresh_token = arr[2].substring(arr[2].indexOf(":") + 2, arr[2].length() - 1);
        this.expires_in = Integer.parseInt(arr[3].substring(arr[3].indexOf(":") + 1));
    }
}
