package com.revature.controllers;

import java.io.StringReader;

import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonReader;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.revature.services.RegistrationService;

@Controller
@RequestMapping("/register")
public class RegistrationController {

	private RegistrationService rs;
	
	@Autowired
	public RegistrationController(RegistrationService rs) {
		this.rs = rs;
	}
	
	@PostMapping
	public ResponseEntity<String> addNewUser(@RequestBody String rawJson){
		ResponseEntity<String> response = null;
		JsonReader jsonReader = Json.createReader(new StringReader(rawJson));
		JsonObject json = jsonReader.readObject();
		jsonReader.close();
		try {
			if(!rs.addNewUser(json)) {
				System.out.println("The email or password fields were null, don't panic."); //custom exception maybe
				throw new Exception();
			}
			response = new ResponseEntity<>("New User registered, congratulations, nerd.", HttpStatus.OK);
		}catch(Exception e){
			e.printStackTrace();
			response = new ResponseEntity<>("Could not add new user.", HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return response;
	}
	
}
