package com.blog.service;

import com.blog.model.UserSignup;
import com.blog.repository.AuthenticationRepo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.security.MessageDigest;
import java.util.List;

@Service
public class AuthenticationService {

    private static final Logger logger = LoggerFactory.getLogger(AuthenticationService.class);

    @Autowired
    private AuthenticationRepo authenticationRepo;

    public String generateHashingPassword(String simplePassword) {

        // Object Define
        StringBuilder stringBuilder = new StringBuilder();
        MessageDigest messageDigest = null;

        // Variables Define
        String generatedHashPassword = null;
        byte getBytes[];

        try {
            messageDigest = MessageDigest.getInstance("MD5");
            getBytes = messageDigest.digest(simplePassword.getBytes());

            for (int i = 0; i < getBytes.length; i++) {
                stringBuilder.append(Integer.toString((getBytes[i] & 0xff) + 0x100, 16).substring(1));
            }

            generatedHashPassword = stringBuilder.toString();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return generatedHashPassword;
    }

    public UserSignup registerUser(UserSignup signup) {
        UserSignup userResponse = null;
//        if (this.checkEmailIsRegister(signup.getEmail())) {
        userResponse = authenticationRepo.save(signup);
//        }else{
        logger.error("Email already register", HttpStatus.INTERNAL_SERVER_ERROR);
//        }
        return userResponse;
    }

    public List<UserSignup> getUserListService() {
        return authenticationRepo.findAll();
    }

    public boolean checkEmailIsRegister(String email) {
        return authenticationRepo.findByEmail(email);
    }

    public UserSignup getLoginUserDetails(String userName){
        UserSignup userDetails=authenticationRepo.findByUserNameOrEmail(userName,userName);
        return userDetails;
    }

//    public byte[] getGeneratedSalt(){
//        byte bytes[]=new byte[16];
//        try{
//            SecureRandom secureRandom=SecureRandom.getInstance("SHA1PRNG","SUN");
//            secureRandom.nextBytes(bytes);
//        }catch(Exception e){
//            e.printStackTrace();
//        }
//        return bytes;
//    }

}
