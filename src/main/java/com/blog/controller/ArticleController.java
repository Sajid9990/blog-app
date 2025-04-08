package com.blog.controller;

import com.blog.model.ResponseWith;
import com.blog.service.ArticleService;
import com.blog.utils.Status;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/public")
public class ArticleController {
    private static final Logger LOGGER = LoggerFactory.getLogger(ArticleController.class);

    @Autowired
    private ArticleService articleService;

    @GetMapping(path = {"/latest/article"})
    public ResponseEntity<?> getLatestArticle() {
        articleService
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResponseWith(Status.FAILED));
    }
}
