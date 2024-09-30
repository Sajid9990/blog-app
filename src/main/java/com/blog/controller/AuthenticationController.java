package com.blog.controller;

import com.blog.model.ResponseWith;
import com.blog.model.UserSignup;
import com.blog.model.LoginRequest;
import com.blog.security.model.JwtResponse;
import com.blog.service.AuthenticationService;
import com.blog.security.utils.JwtUtil;
import com.blog.utils.Status;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import com.blog.security.service.CustomUserDetailsService;

@RestController
@RequestMapping(path = "/api")
public class AuthenticationController {

    private static final Logger logger = LoggerFactory.getLogger(AuthenticationController.class);

    @Autowired
    private AuthenticationService authenticationService;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private CustomUserDetailsService customUserDetailsService;
    @Autowired
    private JwtUtil jwtUtil;

    @Value("${constant.blog.auth_type}")
    private String authenticationType;

    @PostMapping("/public/signup")
    public ResponseEntity<?> singUp(@RequestBody UserSignup signup) {
        if (signup.getUserName() != null && signup.getUserName() != "" && signup.getEmail() != null && signup.getEmail() != "") {

            // Generate Hash password for security
            String pass = authenticationService.generateHashingPassword(signup.getPassword());
            signup.setPassword(pass);

            try {
                // save user details into db
                UserSignup isRegister = authenticationService.registerUser(signup);
                return ResponseEntity.ok(new ResponseWith(Status.SUCCESS, signup));
            } catch (Exception e) {
                logger.error("user not register ", HttpStatus.INTERNAL_SERVER_ERROR);
                return ResponseEntity.ok(new ResponseWith(Status.FAILED, null));
            }

            // if return true then data save into db

        } else {
            logger.error("Validation Error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return ResponseEntity.ok("User Not Register");
    }

    @RequestMapping(path = "/public/signin", method = RequestMethod.POST)
    public ResponseEntity<?> generateToken(@RequestBody LoginRequest loginRequest) {
        String securePassword = authenticationService.generateHashingPassword(loginRequest.getPassword());
        String token = null;
        UserSignup loginUserDetails = null;
        try {
            authenticationManager.authenticate(new
                    UsernamePasswordAuthenticationToken(loginRequest.getUserName(), securePassword));

            // if validation are success and user valid then token are generated
            UserDetails userDetails = this.customUserDetailsService.loadUserByUsername(loginRequest.getUserName());
            if (userDetails != null) {
                token = this.jwtUtil.generateToken(userDetails);
            } else {
                logger.error("AuthenticationController : UserDetails object are null");
            }
        } catch (Exception e) {
            logger.error("AuthenticationController : " + e.getMessage(), HttpStatus.FORBIDDEN);
            return ResponseEntity.ok(new JwtResponse(Status.FAILED));
        }

        if (token != null || token.equals("")) {
            loginUserDetails = authenticationService.getLoginUserDetails(loginRequest.getUserName());
            return ResponseEntity.ok(new JwtResponse(loginUserDetails, authenticationType, Status.SUCCESS, jwtUtil.extractExpiration(token), token));

        }
        return new ResponseEntity(new JwtResponse(Status.FAILED), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @GetMapping("/public/test")
    public static String test() {
        System.out.println("yes it's run success");
        return "Need No Token";
    }

    @GetMapping("/private/user")
    public String getName() {
        System.out.println("token verify");
        return "Need Token";
    }


}
