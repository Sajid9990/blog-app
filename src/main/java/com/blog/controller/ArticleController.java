package com.blog.controller;

import com.blog.model.Article;
import com.blog.model.ResponseWith;
import com.blog.service.ArticleService;
import com.blog.service.FileManipulationService;
import com.blog.service.GitHubServices;
import com.blog.utils.Status;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping(path = {"/api"})
public class ArticleController {

    @Autowired
    private GitHubServices gitHubServices;

    @Autowired
    private FileManipulationService fileManipulationService;

    @Autowired
    private ArticleService articleService;

    @GetMapping(path = {"/public/github/upload"})
    public ResponseEntity createArticle2() throws IOException {
        Article article = new Article();
        article.setId(1);
        article.setTitle("Just Checking");
        article.setDescription("Just Checking Description");
        article.setBody("Just Checking body");

        ObjectMapper objectMapper = new ObjectMapper();

        String s = objectMapper.writeValueAsString(article);

        fileManipulationService.createJsonFile("myJson_1", "assets/files/", s);

//        boolean isUploaded = gitHubServices.uploadFileToGitHubRepo(filePath, destinationPath,"Uploaded filed into repo");

        return null;
    }

    @PostMapping(path = {"/private/article"})
    public ResponseEntity<?> createArticle(@RequestBody(required = true) Article article) {
        if (article != null) {
            Article savedArticle = articleService.createArticle(article);
            if (savedArticle.getId() > 0) {
                return ResponseEntity.status(HttpStatus.OK).body(new ResponseWith(Status.SUCCESS, savedArticle));
            }
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResponseWith(Status.FAILED));
    }

    @PutMapping(path = {"/private/article/{id}"})
    public ResponseEntity<?> updateArticle(@RequestBody(required = true) Article article,
                                           @PathVariable(name = "id") int articleId) {
        if (articleId > 0) {
            if (article != null) {
                Article updatedArticle = articleService.updateArticleById(articleId, article);
                if (updatedArticle != null) {
                    return ResponseEntity.status(HttpStatus.OK).body(new ResponseWith(Status.SUCCESS, updatedArticle));
                }
            }
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResponseWith(Status.FAILED));
    }

    @GetMapping(path = {"/private/articles"})
    public ResponseEntity<?> getAllArticles() {
        List<Article> articleList = articleService.getArticleList();
        if (!articleList.isEmpty()) {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseWith(Status.SUCCESS, articleList));
        }
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(new ResponseWith(Status.FAILED));
    }

    @GetMapping(path = {"/private/article/{id}"})
    public ResponseEntity<?> getArticleById(@PathVariable(name = "id") int articleId) {
        if (articleId > 0) {
            Article article = articleService.getArticleById(articleId);
            if (article != null) {
                return ResponseEntity.status(HttpStatus.OK).body(new ResponseWith(Status.SUCCESS, article));
            }
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(new ResponseWith(Status.FAILED, "Article not found"));
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResponseWith(Status.FAILED));
    }

}
