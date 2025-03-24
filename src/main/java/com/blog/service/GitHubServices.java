package com.blog.service;

import com.blog.model.Article;
import com.blog.utils.ApplicationProp;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import okhttp3.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Base64;
import java.util.List;
import java.util.concurrent.TimeUnit;

@Service
public class GitHubServices {

    @Autowired
    ApplicationProp applicationProp;

    @Autowired
    FileManipulationService fileManipulationService;

    @Autowired
    ArticleService articleService;

    private String gitTokenExtractor(String tokenWithKey) {
        // remove key from token
        String token = tokenWithKey.split("mygittoken_")[1];
        return token;
    }


    public boolean uploadFileToGitHubRepo(String sourceFilePath, String destinationFilePath, String commitMessage) throws IOException {
        Path path = Paths.get(sourceFilePath);
        byte[] fileBytes = Files.readAllBytes(path);
        String fileContent = Base64.getEncoder().encodeToString(fileBytes);

        OkHttpClient client = new OkHttpClient.Builder()
                .connectTimeout(30, TimeUnit.SECONDS)
                .readTimeout(30, TimeUnit.SECONDS)
                .build();

        // Format GitHub API URL
        String url = String.format(applicationProp.GITHUB_BASE_URL, applicationProp.REPO_OWNER, applicationProp.REPO_NAME, destinationFilePath);

        // **Step 1: Check if the file exists and get its SHA**
        String fileSha = getFileSha(client, url);

        // **Step 2: Create JSON Body**
        JsonObject jsonBody = new JsonObject();
        jsonBody.addProperty("message", commitMessage);
        jsonBody.addProperty("content", fileContent);
        jsonBody.addProperty("branch", applicationProp.BRANCH);
        if (fileSha != null) {
            jsonBody.addProperty("sha", fileSha); // Needed for updating an existing file
        }

        RequestBody body = RequestBody.create(jsonBody.toString(), MediaType.parse("application/json; charset=utf-8"));

        Request request = new Request.Builder()
                .url(url)
                .header("Authorization", "token " + this.gitTokenExtractor(applicationProp.TOKEN))
                .put(body)
                .build();

        try (Response response = client.newCall(request).execute()) {
            if (!response.isSuccessful()) {
                System.out.println("Unexpected response: " + response.body().string());
                return false;
            }
            System.out.println("File uploaded successfully.");
            return true;
        }
    }

    // **Helper Method: Fetch File SHA**
    private String getFileSha(OkHttpClient client, String fileUrl) throws IOException {
        Request request = new Request.Builder()
                .url(fileUrl)
                .header("Authorization", "token " + this.gitTokenExtractor(applicationProp.TOKEN))
                .get()
                .build();

        try (Response response = client.newCall(request).execute()) {
            if (!response.isSuccessful()) {
                if (response.code() == 404) return null; // File doesn't exist, so no SHA needed
                throw new IOException("Failed to get file SHA: " + response.body().string());
            }

            JsonObject jsonResponse = JsonParser.parseString(response.body().string()).getAsJsonObject();
            return jsonResponse.get("sha").getAsString();
        }
    }

    public boolean uploadArticleOnGithub() {
        try {
            // get all articles
            List<Article> articleList = articleService.getArticleList();
            if (!articleList.isEmpty()) {
                articleList.forEach(article -> {
                    upload(article);
                });
                return true;
            }
        } catch (Exception e) {
            System.out.println(e);
        }
        return false;
    }

    public void upload(Article article) {
        String sourcePath = "assets/files/";
        String destinationPath = "public/assets/";
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            String articleJson = objectMapper.writeValueAsString(article);
            // create file
            String fileName = "article_" + article.getId() + ".json";
            fileManipulationService.createJsonFile(fileName, sourcePath, articleJson);
            // upload file
            boolean isUploaded = this.uploadFileToGitHubRepo(sourcePath + fileName, destinationPath + fileName, "Uploaded filed into repo");

        } catch (Exception e) {
            System.out.println(e);
        }
    }
}
