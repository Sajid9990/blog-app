package com.blog.controller;

import com.google.gson.JsonObject;
import okhttp3.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Base64;

@RestController
@RequestMapping(path = {"/api/public"})
public class UploadFileToGithub {
    private static final String REPO_OWNER = "sajid9990";
    private static final String REPO_NAME = "blog-app";
    private static final String BRANCH = "main";
    private static final String TOKEN = "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";

    @GetMapping(path = {"/upload/to/github"})
    public ResponseEntity uploadToGithub() throws IOException {
        String filePath = "D:\\abc.txt";
        String dirPath = "public/assets/";
        String fileNameAndDir = dirPath + "abc_updated.txt";
        String commitMessage = "Just Adding Files On Github Repository";

        // Read file and encode to Base64
        Path path = Paths.get(filePath);
        byte[] fileBytes = Files.readAllBytes(path);
        String fileContent = Base64.getEncoder().encodeToString(fileBytes);

        // Create JSON body
        JsonObject jsonBody = new JsonObject();
        jsonBody.addProperty("message", commitMessage);
        jsonBody.addProperty("content", fileContent);
        jsonBody.addProperty("branch", BRANCH);

        // Prepare the HTTP request
        OkHttpClient client = new OkHttpClient();
        RequestBody body = RequestBody.create(
                MediaType.parse("application/json; charset=utf-8"),
                jsonBody.toString()
        );

        String url = String.format("https://api.github.com/repos/%s/%s/contents/%s", REPO_OWNER, REPO_NAME, fileNameAndDir);

        Request request = new Request.Builder()
                .url(url)
                .header("Authorization", "token " + TOKEN)
                .put(body)
                .build();

        // Execute the request
        try (Response response = client.newCall(request).execute()) {
            if (!response.isSuccessful()) {
                throw new IOException("Unexpected code " + response);
            }
            System.out.println("File uploaded successfully: " + response.body().string());
        }


        return null;
    }
}
