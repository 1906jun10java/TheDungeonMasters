package com.revature.driver;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

import com.revature.beans.Campaign;
import com.revature.beans.User;
import com.revature.util.ConnectionUtil;

public class TestDriver {

	public static void main(String[] args) {
		User u1 = new User("first","last","email");
		Campaign c1 = new Campaign("Camp Pain", 3, 0);
		
		SessionFactory sf = ConnectionUtil.getSessionFactory();
		Session s = sf.openSession();
		Transaction tx = s.beginTransaction();
		s.persist(u1);
		s.persist(c1);
		tx.commit();
		s.close();
	}
	
}
