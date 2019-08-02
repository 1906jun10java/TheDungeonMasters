package com.revature.beans;

public class Credentials {

	public Credentials(int id, String password) {
		super();
		this.id = id;
		this.password = password;
	}

	private int id;
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
