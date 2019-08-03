package com.revature.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.revature.beans.ActiveEntity;
import com.revature.beans.Campaign;
import com.revature.datalayer.ActiveEntityDAO;

@Service
public class ActiveEntityService {

	private ActiveEntityDAO aed;
	
	public ActiveEntityService(ActiveEntityDAO aed) {
		this.aed = aed;
	}
	
	public List<ActiveEntity> returnAllActiveEntitesByCampaign(Campaign c){
		List<ActiveEntity> tempList = new ArrayList<>();
		tempList = aed.getEntitiesByCampaign(c);
		return tempList;
	}
	
	public void storeActiveEntities(List<ActiveEntity> activeEntityList) {
		for(ActiveEntity ae : activeEntityList) {
			aed.createActiveEntity(ae);
		}
	}
}
