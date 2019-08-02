package com.revature.beans;

public class User {
	
	
	public User(int userId, String firstName, String lastName, String email) {
		super();
		this.userId = userId;
		FirstName = firstName;
		LastName = lastName;
		Email = email;
	}
	
	private int userId;
	private String FirstName;
	private String LastName;
	private String Email;
	
	
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getFirstName() {
		return FirstName;
	}
	public void setFirstName(String firstName) {
		FirstName = firstName;
	}
	public String getLastName() {
		return LastName;
	}
	public void setLastName(String lastName) {
		LastName = lastName;
	}
	public String getEmail() {
		return Email;
	}
	public void setEmail(String email) {
		Email = email;
	}
	@Override
	public String toString() {
		return "User [userId=" + userId + ", FirstName=" + FirstName + ", LastName=" + LastName + ", Email=" + Email
				+ "]";
	}
	
}
