package com.blog.model;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "article")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    String title;
    String description;
    String body;
}
