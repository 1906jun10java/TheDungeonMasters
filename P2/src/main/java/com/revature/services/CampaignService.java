package com.revature.services;

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
	
	public List<Integer> getCampaignIdsByUser(User u){
		return cDAO.getCampaignIdsByUser(u);
	}

}
