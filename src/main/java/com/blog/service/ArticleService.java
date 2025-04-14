package com.blog.service;

import com.blog.model.Article;
import com.blog.repository.ArticleRepo;
import com.blog.utils.Helper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ArticleService {
    final static Logger LOGGER = LoggerFactory.getLogger(ArticleService.class);

    @Autowired
    protected ArticleRepo articleRepo;

    @Autowired
    protected GitHubServices gitHubServices;

    public Article createArticle(Article article) {
        if (article != null) {
            Article savedArticle = articleRepo.save(article);
            LOGGER.info("Article Created : " + savedArticle.getId());
            if (savedArticle != null) {
                String fileName = "article_" + article.getId() + ".json";
                // after save article create on GitHub
                gitHubServices.upload(savedArticle, fileName);
            }
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
                if (updatedArticle != null) {
                    String fileName = "article_" + article.getId() + ".json";
                    // update the article on GitHub repo
                    gitHubServices.upload(updatedArticle, fileName);
                }
                return updatedArticle;
            }
        }
        return null;
    }

    public boolean deleteArticleById(int articleId) {
        if (articleId > 0) {
            try {
                articleRepo.deleteById(articleId);
                return true;
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return false;
    }

    public boolean uploadArticleOnGithub() {
        try {
            // get all articles
            List<Article> articleList = getArticleList();
            if (!articleList.isEmpty()) {
                articleList.forEach(article -> {
                    String fileName = "article_" + article.getId() + ".json";
                    gitHubServices.upload(article, fileName);
                });
                return true;
            }
        } catch (Exception e) {
            System.out.println(e);
        }
        return false;
    }

//    public boolean createLatestArticle() {
//        List<Article> articleFileName = new ArrayList<>();
//        List<Article> all = articleRepo.findAll(Sort.by(Sort.Order.desc("id")));
//        all.forEach(article -> {
//            articleFileName.add(article); // add each file name
//        });
//        gitHubServices.upload(articleFileName, "latest_article.json");
//        return true;
//    }

    public Page<Article> getLatestArticle(int page, int size) {
        Helper.generateSlug("abc fi jkmkv vkfmvf", "mkcmdk cd dcd dcd");
        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Order.desc("id")));
        return articleRepo.findAll(pageable);
    }


}
