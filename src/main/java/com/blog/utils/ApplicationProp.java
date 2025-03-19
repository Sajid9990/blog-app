package com.blog.utils;

import lombok.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Component
public class ApplicationProp {
    // GitHub Properties
    @Value("${github.owner.name}")
    public String REPO_OWNER;
    @Value("${github.repository.name}")
    public String REPO_NAME;
    @Value("${github.branch}")
    public String BRANCH;
    @Value("${github.token}")
    public String TOKEN;
    @Value("${github.base.url}")
    public String GITHUB_BASE_URL;

    // Upload Properties
    @Value("${blog.upload.on.github}")
    public String IS_UPLOAD_ON_GITHUB;
    @Value("${blog.write.files}")
    public String IS_WRITE_FILES;
}

