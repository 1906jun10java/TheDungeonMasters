package com.revature.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="CREDENTIALS")
public class Credentials {

	public Credentials(String password) {
		super();
		this.password = password;
	}

	@Column(name="ID")
	private int id;
	
	@Column(name="PASSWORD")
	private String password;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	@Override
	public String toString() {
		return "Credentials [id=" + id + ", password=" + password + "]";
	}
	
}
