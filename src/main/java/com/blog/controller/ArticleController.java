package com.blog.controller;

import com.blog.dto.mapper.ArticleMapper;
import com.blog.model.Article;
import com.blog.model.ResponseWith;
import com.blog.service.ArticleService;
import com.blog.utils.Status;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/public")
public class ArticleController {
    private static final Logger LOGGER = LoggerFactory.getLogger(ArticleController.class);

    @Autowired
    private ArticleService articleService;

    @Autowired
    private ArticleMapper articleMapper;

    @GetMapping(path = {"/article/{id}"})
    public ResponseEntity<?> getPublicArticleById(@PathVariable(name = "id") int articleId) {
        if (articleId > 0) {
            Article article = articleService.getArticleById(articleId);
            if (article != null) {
                // convert entity to dto object for data manipulation or transformation
                Article articles = articleMapper.wrapArticleInDto(article);
                return ResponseEntity.status(HttpStatus.OK).body(new ResponseWith(Status.SUCCESS, article));
            }
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(new ResponseWith(Status.FAILED, "Article not found"));
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResponseWith(Status.FAILED));
    }

    @GetMapping(path = {"/latest/articles"})
    public ResponseEntity<?> getLatestArticles(@RequestParam(defaultValue = "0") int page,
                                               @RequestParam(defaultValue = "10") int size) {
        Page<Article> latestArticle = articleService.getLatestArticle(page, size);
        if (!latestArticle.isEmpty()) {
            // convert entity to dto object for data manipulation or transformation
            Page<Article> articles = articleMapper.wrapArticleInDto(latestArticle);
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseWith(Status.SUCCESS, articles, "Here are latest articles"));
        }
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseWith(Status.NO_CONTENT, "there have no any latest articles"));
    }

}
