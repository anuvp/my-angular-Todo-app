package com.avptodo.rest.webservices.restfulwebservices;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {
	
	@GetMapping(path="/home")
	public String display()
	{
		return "Hello World";
	}
	
	@GetMapping(path="/home-bean")
	public helloWorldBean displayBean()
	{
		return new helloWorldBean("Hello World");
	}
}
