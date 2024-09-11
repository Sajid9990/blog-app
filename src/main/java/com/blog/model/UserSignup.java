package com.blog.model;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "signup", uniqueConstraints = {
        @UniqueConstraint(columnNames = "email"),
        @UniqueConstraint(columnNames = "username")
})
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class UserSignup {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "firstname")
    private String firstName;

    @Column(name = "lastname")
    private String lastName;

    @Column(name = "email")
    private String email;

    @Column(name = "username")
    private String userName;

    @Column(name = "password")
    private String password;

    @Column(name = "user_role") // 1=admin , 2=user 3=etc..
    private byte userRole = 2;

}
