package com.revature.services;

import javax.json.JsonObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.Credentials;
import com.revature.beans.User;
import com.revature.datalayer.LoginDAO;

@Service
public class RegistrationService {

	private LoginDAO ld;
	
	@Autowired
	public RegistrationService(LoginDAO ld) {
		this.ld = ld;
	}
	
	//Split our form data into a new user and a new credentials object
	public boolean addNewUser(JsonObject body) {
		System.out.println(body);
		User temp = new User();
		Credentials creds = new Credentials();
		temp.setLastName(body.getString("lastName"));
		temp.setFirstName(body.getString("firstName"));
		temp.setEmail(body.getString("email"));
		if(temp.getEmail().isEmpty()) {
			return false;
		}
		creds.setUser(temp);
		creds.setPassword(body.getString("password"));
		if(creds.getPassword().isEmpty()) {
			return false;
		}
		if(ld.getUserByEmail(temp.getEmail()) != null) {
			System.out.println(ld.getUserByEmail(temp.getEmail()));
			return false;
		}
		ld.createUser(temp, creds);
		return true;
	}
}
