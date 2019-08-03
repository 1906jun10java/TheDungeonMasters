package com.revature.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.Campaign;
import com.revature.beans.User;
import com.revature.datalayer.CampaignDAO;

@Service
public class CampaignService {
	
	private CampaignDAO cDAO;
	
	@Autowired
	public CampaignService(CampaignDAO cDAO) {
		this.cDAO = cDAO;
	}
	
	public List<Campaign> getCampaignsByUser(User u){
		return cDAO.getCampaignsByUser(u);
	}
	
	//Pass in a User's List of campaign ids to get those respective campaigns
	public List<Campaign> getCampaignsByIntegerList(List<Integer> cList){
		List<Campaign> listToReturn = new ArrayList<>();
		for(int i : cList) {
			listToReturn.add(cDAO.getCampaignById(i));
		}
		return listToReturn;
	}
	
	public List<Integer> getCampaignIdsByUser(User u){
		return cDAO.getCampaignIdsByUser(u);
	}
	
	public void addCampaign(User u, String cName, int round, int turn) {
		Campaign cToAdd = new Campaign(cName, round, turn);
		cToAdd.setUser(u);
		cDAO.addCampaign(cToAdd);
	}

}
