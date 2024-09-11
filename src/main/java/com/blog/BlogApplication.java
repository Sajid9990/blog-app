package com.blog;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/*
 *   @SpringBootApplication(exclude = DataSourceAutoConfiguration.class)     =>>  using to exclude Datasource properties if not interact with database
 * */
@SpringBootApplication
public class BlogApplication {

	public static void main(String[] args) {
		SpringApplication.run(BlogApplication.class, args);
	}

}
