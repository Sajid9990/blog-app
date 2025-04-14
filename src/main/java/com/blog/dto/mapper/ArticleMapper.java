package com.blog.dto.mapper;

import com.blog.model.Article;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ArticleMapper {

    public Page<Article> wrapArticleInDto(Page<Article> latestArticle) {
        latestArticle.getContent().stream().forEach(x -> {
            x.setIconImg("https://1759398355.rsc.cdn77.org/assets1/icon/" + x.getIconImg());
            x.setFeatureImg("https://1759398355.rsc.cdn77.org/assets1/feature/" + x.getFeatureImg());
        });
        return latestArticle;
    }

    public Article wrapArticleInDto(Article article) {
        article.setIconImg("https://1759398355.rsc.cdn77.org/assets1/icon/" + article.getIconImg());
        article.setFeatureImg("https://1759398355.rsc.cdn77.org/assets1/feature/" + article.getFeatureImg());
        return article;
    }
}
