package be.kauffman.kfm.security.entity;

import be.kauffman.kfm.common.entity.ApiResponse;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SignupRequest {
    private String email;
    private String password;

    public ApiResponse isValid(){
        if(email == null ||email.isEmpty()){
            if(password == null ||password.isEmpty()){
                return new ApiResponse(false, null, "api.signup.valid-error-full");
            }else{
                return new ApiResponse(false, null, "api.signup.valid-error-email");
            }
        }else if(password == null ||password.isEmpty()){
            return new ApiResponse(false, null, "api.signup.valid-error-password");
        }else{
            return new ApiResponse(true, this, null);
        }
    }
}
