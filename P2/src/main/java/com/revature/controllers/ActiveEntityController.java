package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.revature.beans.ActiveEntity;
import com.revature.beans.Campaign;
import com.revature.services.ActiveEntityService;

@Controller
@RequestMapping("/activeEntity")
public class ActiveEntityController {

	private ActiveEntityService aes;

	@Autowired
	public ActiveEntityController(ActiveEntityService aes) {
		this.aes = aes;
	}

	@RequestMapping("/returnAllEntities")
	public ResponseEntity<List<ActiveEntity>> returnActiveEntitys(@RequestBody Campaign campaign){
		try {
			return new ResponseEntity<>(aes.returnAllActiveEntitesByCampaign(campaign),HttpStatus.OK);
		}catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}
	
	@RequestMapping(value="/saveEntities", method=RequestMethod.POST)
	public ResponseEntity<String> storeEntities(@RequestBody ActiveEntity activeEntities){
		ResponseEntity<String> response = null;
		try {
			aes.storeActiveEntities(activeEntities);
			response = new ResponseEntity<>("Entities are added",HttpStatus.OK);
		}catch(Exception e) {
			response = new ResponseEntity<>("Entites are not added",HttpStatus.BAD_REQUEST);
		}
		return response;
	}
}
