package com.blog.security.model;

import com.blog.model.UserSignup;
import lombok.*;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@ToString
public class JwtResponse {

    @Getter@Setter
    private UserSignup user;

    @Getter@Setter
    private String authType;

    @Getter@Setter
    private String status;

    @Getter@Setter
    private Date tokenExprDate;

    @Getter@Setter
    private String token;

    public JwtResponse(String status) {
        this.status = status;
    }
}
