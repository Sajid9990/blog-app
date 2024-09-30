package com.blog.service;

import com.blog.utils.ApplicationProp;
import com.google.gson.JsonObject;
import okhttp3.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Base64;
import java.util.concurrent.TimeUnit;

@Service
public class GitHubServices {

    @Autowired
    ApplicationProp applicationProp;

    private String gitTokenExtractor(String tokenWithKey) {
        // remove key from token
        String token = tokenWithKey.split("mygittoken_")[1];
        return token;
    }


    public boolean uploadFileToGitHubRepo(String sourceFilePath, String destinationFilePath, String commitMessage) throws IOException {
        // Read file and encode to Base64
        Path path = Paths.get(sourceFilePath);
        byte[] fileBytes = Files.readAllBytes(path);
        String fileContent = Base64.getEncoder().encodeToString(fileBytes);

        // Create JSON body
        JsonObject jsonBody = new JsonObject();
        jsonBody.addProperty("message", commitMessage);
        jsonBody.addProperty("content", fileContent);
        jsonBody.addProperty("branch", applicationProp.BRANCH);

        // Prepare the HTTP request
        OkHttpClient client = new OkHttpClient.Builder()
                .connectTimeout(30, TimeUnit.SECONDS) // Set connection timeout
                .readTimeout(30, TimeUnit.SECONDS)    // Set read timeout
                .build();

        RequestBody body = RequestBody.create(jsonBody.toString(), MediaType.parse("application/json; charset=utf-8"));

        // format the url where data is stored
        String url = String.format(applicationProp.GITHUB_BASE_URL, applicationProp.REPO_OWNER, applicationProp.REPO_NAME, destinationFilePath);

        Request request = new Request.Builder()
                .url(url)
                .header("Authorization", "token " + this.gitTokenExtractor(applicationProp.TOKEN))
                .put(body)
                .build();

        // Execute the request
        try (Response response = client.newCall(request).execute()) {
            if (!response.isSuccessful()) {
                System.out.println("unexpected code " + response);
                return false;
            }
            System.out.println("File uploaded successfully: " + response.body().string());
            return true;
        }
    }
}
