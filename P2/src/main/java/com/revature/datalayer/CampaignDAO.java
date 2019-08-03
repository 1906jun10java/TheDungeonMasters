package com.revature.datalayer;

import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.revature.beans.Campaign;
import com.revature.beans.User;

@Repository(value="campaignDAO")
@Transactional
public class CampaignDAO {
	
	private SessionFactory sf;

	@Autowired //constructor injection
	public CampaignDAO(SessionFactory sf) {
		this.sf = sf;
	}
	
	public Campaign getCampaignsById(int id) {
		return sf.getCurrentSession().get(Campaign.class, id);
	}

	public List<Campaign> getCampaignsByUser(User u){
		Session s = sf.getCurrentSession();
		CriteriaBuilder cb = s.getCriteriaBuilder();
		CriteriaQuery<Campaign> cq = cb.createQuery(Campaign.class);
		Root<Campaign> root = cq.from(Campaign.class);
		cq.select(root).where(cb.equal(root.get("user"), u));
		Query<Campaign> q = s.createQuery(cq);
		return q.getResultList();
	}
	
	//This, and the Active Entities DAO, will assume that the respective 
	//ManyToOnes will have been set before being passed in
	public void createCampaign(Campaign c) {
		sf.getCurrentSession().persist(c);
	}
	
}
