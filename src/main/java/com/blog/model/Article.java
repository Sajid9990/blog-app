package com.blog.model;

import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "article", uniqueConstraints = {
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
    @Column(name = "content", columnDefinition = "Text")
    private String content;
    private String featureImg;
    private String iconImg;
    private String slug;
    private byte trending;
    private byte status;
    // SEO Fields
    @Column(name = "meta_title", columnDefinition = "Text")
    private String metaTitle;
    @Column(name = "meta_description", columnDefinition = "Text")
    private String metaDesc;
    @Column(name = "meta_keyword", columnDefinition = "Text")
    private String metaKeyword;
    @CreationTimestamp
    private Timestamp createAt;
    @UpdateTimestamp
    private Timestamp updateAt;
}


/**
 * insert into blog_app.article (`id`,`slug`,`title`,`description`,`content`,`icon_img`,`feature_img`,`status`,`trending`)
 * select id,slug,title,description,Content,icon,feature_image,status,status
 * from thefactmagic.article where status = 1 limit 100;
 *
 * copy data one to other table
 */
