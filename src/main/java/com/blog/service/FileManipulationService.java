package com.blog.service;

import com.blog.utils.Status;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class FileManipulationService {
    private static final Logger LOGGER = LoggerFactory.getLogger(FileManipulationService.class);

    private ObjectMapper objectMapper = new ObjectMapper();

    private Status createDirectories(String directoryPath) throws IOException {
        try {
            Path dirPath = Paths.get(directoryPath);
            if (!Files.exists(dirPath)) {
                Files.createDirectories(dirPath);
                LOGGER.info("Directory created successfully...  : " + dirPath);
            } else {
                LOGGER.info("Already Exists Directory: " + dirPath);
                return Status.EXISTS;
            }
        } catch (Exception e) {
            return Status.FAILED;
        }
        return Status.SUCCESS;
    }

    public Status createJsonFile(String fileName, String path, String jsonData) throws IOException {
        // Check path is exists or not
        Status res = createDirectories(path);
        if (res.getName().equals(Status.SUCCESS.getName()) || res.getName().equals(Status.EXISTS.getName())) {
            // Write the object to a JSON file
            objectMapper.writeValue(new File(path + fileName + ".json"), jsonData);
            LOGGER.info("JSON file created successfully!");
            return Status.SUCCESS;
        }
        return Status.FAILED;
    }

}
