package com.blog.model;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "article",uniqueConstraints = {
        @UniqueConstraint(columnNames = "title")
})
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String title;
    private String category;
    private String description;
    @Column(name = "content",columnDefinition = "Text")
    private String content;
    private String featureImg;
    private String iconImg;
}
