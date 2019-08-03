package com.revature.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.revature.beans.MonsterVault;
import com.revature.services.MonsterVaultService;

@Controller
@RequestMapping("/monsterVault")
public class MonsterVaultController {
	
	private MonsterVaultService mvs;
	
	public MonsterVaultController(MonsterVaultService mvs) {
		this.mvs = mvs;
	}
	
	@RequestMapping("/returnAll")
	public ResponseEntity<List<MonsterVault>> returnAllMonsters(){
		return new ResponseEntity<>(mvs.returnAllMonster(),HttpStatus.OK);
	}
	
	
	

}
