package com.blog.service;

import com.blog.model.Article;
import com.blog.repository.ArticleRepo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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


}
