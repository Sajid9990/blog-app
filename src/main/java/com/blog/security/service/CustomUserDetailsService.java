package com.blog.security.service;

import com.blog.model.UserSignup;
import com.blog.repository.AuthenticationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;

@Service
public class CustomUserDetailsService implements UserDetailsService{

    @Autowired
    AuthenticationRepo authenticationRepo;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String userNameAndEmail) throws UsernameNotFoundException {
        UserSignup signup=authenticationRepo.findByUserNameOrEmail(userNameAndEmail,userNameAndEmail);
        if(userNameAndEmail.equals(signup.getUserName())){
            return new User(signup.getUserName(), signup.getPassword(),new ArrayList<>());
        }else{
            throw new UsernameNotFoundException("User Not Found !!");
        }
    }

}
