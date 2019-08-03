package com.revature.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.MonsterVault;
import com.revature.datalayer.MonsterDAO;

@Service
public class MonsterVaultService {

	private MonsterDAO monsterDAO;
	
	@Autowired
	public MonsterVaultService(MonsterDAO monsterDAO) {
		this.monsterDAO = monsterDAO;
	}
	
	public List<MonsterVault> returnAllMonster(){
		List<MonsterVault> monsters = new ArrayList<>();
		monsters = monsterDAO.getAllMonsters();
		return monsters;
	}
}
