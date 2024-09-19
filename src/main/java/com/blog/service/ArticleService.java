package com.blog.service;

import com.blog.model.Article;
import com.blog.repository.ArticleRepo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ArticleService {
    final static Logger LOGGER = LoggerFactory.getLogger(ArticleService.class);

    @Autowired
    ArticleRepo articleRepo;

    public Article createArticle(Article article) {
        if (article != null) {
            Article savedArticle = articleRepo.save(article);
            LOGGER.info("Article Created : " + savedArticle.getId());
            return savedArticle;
        }
        return null;
    }

    public List<Article> getArticleList() {
        try {
            List<Article> savedArticles = articleRepo.findAll();
            return savedArticles;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public Article getArticleById(int articleId) {
        if (articleId > 0) {
            try {
                Optional<Article> savedArticle = articleRepo.findById(articleId);
                return savedArticle.get();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return null;
    }

    public Article updateArticleById(int articleId, Article article) {
        if (articleId > 0) {
            Optional<Article> savedArticle = articleRepo.findById(articleId);
            if (savedArticle.isPresent()) {
                // update the article
                article.setId(savedArticle.get().getId());
                Article updatedArticle = articleRepo.save(article);
                return updatedArticle;
            }
        }
        return null;
    }


}
