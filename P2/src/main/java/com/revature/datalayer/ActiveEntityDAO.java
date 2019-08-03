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

import com.revature.beans.ActiveEntity;
import com.revature.beans.Campaign;

@Repository(value="activeEntityDAO")
@Transactional
public class ActiveEntityDAO {

	private SessionFactory sf;

	@Autowired //constructor injection
	public ActiveEntityDAO(SessionFactory sf) {
		this.sf = sf;
	}
	
	public ActiveEntity getEntityById(int id) {
		return sf.getCurrentSession().get(ActiveEntity.class, id);
	}
	
	public List<ActiveEntity> getEntitiesByCampaign(Campaign c){
		Session s = sf.getCurrentSession();
		CriteriaBuilder cb = s.getCriteriaBuilder();
		CriteriaQuery<ActiveEntity> cq = cb.createQuery(ActiveEntity.class);
		Root<ActiveEntity> root = cq.from(ActiveEntity.class);
		cq.select(root).where(cb.equal(root.get("containingCampaign"), c));
		Query<ActiveEntity> q = s.createQuery(cq);
		return q.getResultList();
	}
	
	public void createActiveEntity(ActiveEntity ae) {
		sf.getCurrentSession().persist(ae);
	}
}