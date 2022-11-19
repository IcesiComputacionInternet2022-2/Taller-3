package co.edu.icesi.frontZoo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@EnableAutoConfiguration
@ComponentScan(basePackages = {"co.edu.icesi.frontZoo.controller"})

public class FrontZooApplication {

	public static void main(String[] args) {
		SpringApplication.run(FrontZooApplication.class, args);
	}

}
