package com.blog.service;

import com.google.gson.JsonObject;
import okhttp3.*;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Base64;

@Service
public class GitHubServices {
    private static final String REPO_OWNER = "sajid9990";
    private static final String REPO_NAME = "blog-app";
    private static final String BRANCH = "main";
    private static final String TOKEN = "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";
    private static final String GITHUB_BASE_URL = "https://api.github.com/repos/%s/%s/contents/%s";


    public boolean uploadFileToGitHubRepo(String sourceFilePath, String destinationFilePath, String commitMessage) throws IOException {
        // Read file and encode to Base64
        Path path = Paths.get(sourceFilePath);
        byte[] fileBytes = Files.readAllBytes(path);
        String fileContent = Base64.getEncoder().encodeToString(fileBytes);

        // Create JSON body
        JsonObject jsonBody = new JsonObject();
        jsonBody.addProperty("message", commitMessage);
        jsonBody.addProperty("content", fileContent);
        jsonBody.addProperty("branch", BRANCH);

        // Prepare the HTTP request
        OkHttpClient client = new OkHttpClient();
        RequestBody body = RequestBody.create(jsonBody.toString(), MediaType.parse("application/json; charset=utf-8"));

        // format the url where data is stored
        String url = String.format(GITHUB_BASE_URL, REPO_OWNER, REPO_NAME, destinationFilePath);

        Request request = new Request.Builder()
                .url(url)
                .header("Authorization", "token " + TOKEN)
                .put(body)
                .build();

        // Execute the request
        try (Response response = client.newCall(request).execute()) {
            if (!response.isSuccessful()) {
//                throw new IOException("Unexpected code " + response);
                System.out.println("unexpected code " + response);
                return false;
            }
            System.out.println("File uploaded successfully: " + response.body().string());
            return true;
        }
    }
}
