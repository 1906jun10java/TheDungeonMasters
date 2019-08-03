package com.revature.controllers;

import java.io.StringReader;
import java.util.List;

import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonReader;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.revature.beans.Campaign;
import com.revature.services.CampaignService;

@Controller
@RequestMapping("/campaigns")
public class CampaignController {

	private CampaignService cs;
	
	@Autowired
	public CampaignController(CampaignService cs) {
		this.cs = cs;
	}
	
	@RequestMapping(value="/campaign/{id}")
	public ResponseEntity<Campaign> getCampaignById(@PathVariable("id") int id){
		return new ResponseEntity<Campaign>(cs.getCampaignById(id), HttpStatus.OK);
	}
	
	@RequestMapping(value="/all", method=RequestMethod.GET)
	public ResponseEntity<List<Campaign>> getAllCampaigns(){
		return new ResponseEntity<>(cs.getAllCampaigns(), HttpStatus.OK);
	}
	
	@RequestMapping(value="/user/{id}")
	public ResponseEntity<List<Campaign>> getCampaignsByUserId(@PathVariable("id") int id){
		return new ResponseEntity<>(cs.getCampaignsByUserId(id), HttpStatus.OK);
	}
	
	//Uses sessionData to get User, campaings can only be added while logged in
	//@SessionAttribute("user") User user,
	@PostMapping(value="/add")
	public ResponseEntity<String> addCampaign(@RequestBody String rawJson) {
		ResponseEntity<String> resp = null;
		JsonReader jsonReader = Json.createReader(new StringReader(rawJson));
		JsonObject json = jsonReader.readObject();
		jsonReader.close();
		//We will need to get the current User, or at least the user ID.
		String cName = json.getString("campaignName");
		int cRound = json.getInt("currentRound");
		int cTurn = json.getInt("currentTurn");
		try {
			cs.addCampaign(cName, cRound, cTurn);
			resp = new ResponseEntity<String>("Added Campaign: "+cName, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			resp = new ResponseEntity<String>("Adding campaign failed.", HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return resp;
	}
	
	//Uses saveOrUpdate ultimately, may also use it for 
	@PutMapping(value="/update")
	public ResponseEntity<String> updateCampaign(@RequestBody Campaign c) {
		ResponseEntity<String> resp = null;
		//Might need to call AE service to add all Entities
		try {
			if(c.getUser() == null) {
				throw new Exception();
			}
			cs.updateCampaign(c);
			resp = new ResponseEntity<String>("Updated Campaign: "+c.getCampaignName(), HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			resp = new ResponseEntity<String>("Failed to update.", HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return resp;
	}
	
}