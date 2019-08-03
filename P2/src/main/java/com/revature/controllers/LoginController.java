package com.revature.controllers;

import java.util.List;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.beans.Credentials;
import com.revature.beans.User;
import com.revature.services.LoginService;

@Controller
@RequestMapping(value="/login")
public class LoginController{
	private LoginService ls;
	ObjectMapper mapper = new ObjectMapper();
	
	@Autowired
	public LoginController(LoginService ls) {
		this.ls =ls;
	}
	
	
	@RequestMapping(value="/all", method=RequestMethod.GET)
	public ResponseEntity<List<User>>gimmePeople(){
		return new ResponseEntity<>(ls.gimmeUsers(),HttpStatus.OK);
	}
	
	@RequestMapping(value="/cheats", method=RequestMethod.GET)
	public ResponseEntity<List<Credentials>>gimmeUrPassword(){
		return new ResponseEntity<>(ls.gimmeUrPassword(),HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<Boolean> login(@RequestBody JSONObject json){
		ResponseEntity<Boolean> response = null;
		boolean test = false;
		System.out.println(json.toString());
		String email = null;
		String password = null;
		try {
			test = ls.loginTest(email, password);
			response = new ResponseEntity<>(test,HttpStatus.OK);
		}catch(Exception e) {
			response = new ResponseEntity<>(test,HttpStatus.BAD_REQUEST);
		}
		return response;
	}
	
}
