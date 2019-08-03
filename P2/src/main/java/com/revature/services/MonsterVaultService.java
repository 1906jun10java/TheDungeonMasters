package com.revature.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.MonsterVault;
import com.revature.datalayer.MonsterDAO;

@Service
public class MonsterVaultService {
	
	private MonsterDAO md;
	
	@Autowired
	public MonsterVaultService(MonsterDAO md) {
		this.md = md;
	}
	
	public List<MonsterVault> getAllMonsters(){
		return md.getAllMonsters();
	}
	
	public List<MonsterVault> getAllMonstersByName(String name){
		return md.getMonstersByName(name);
	}
	
	//TODO make it so
	public void addMonster(String name, int hp, int ac, int initMod) {
		MonsterVault mv = new MonsterVault(name, hp, ac, initMod);
		md.addMonster(mv);
	}

}
