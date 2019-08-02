package com.revature.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="CREDENTIALS")
public class Credentials {

	public Credentials(String password) {
		super();
		this.password = password;
	}
	
	@Id
	private int id;
	
	@OneToOne
	@MapsId
	private User user;
	
	@Column(name="PASSWORD")
	private String password;
	
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	@Override
	public String toString() {
		return "Credentials [user=" + user + ", password=" + password + "]";
	}
	
}
