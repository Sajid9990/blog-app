package com.blog.repository;

import com.blog.model.UserSignup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthenticationRepo extends JpaRepository<UserSignup,Long> {
     UserSignup findByUserNameOrEmail(String userName,String Email);
     boolean findByEmail(String email);
}
