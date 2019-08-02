package com.revature.beans;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="USER_TABLE")
public class User {
	
	
	public User(String firstName, String lastName, String email) {

		super();
		FirstName = firstName;
		LastName = lastName;
		Email = email;
		this.myCampaigns = myCampaigns;
	}	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO, generator="userSequence")
	@SequenceGenerator(allocationSize=1, name="userSequence", sequenceName="SQ_USER_PK")
	@Column(name="USER_ID")
	private int userId;
	@Column(name="USER_FIRST_NAME")
	private String FirstName;
	@Column(name="USER_LAST_NAME")
	private String LastName;
	@Column(name="USER_EMAIL")
	private String Email;
	@ManyToOne(cascade = CascadeType.ALL, fetch=FetchType.EAGER)
	@JoinTable(name="USER_CAMPAIGNS")
	private List<Campaign> myCampaigns;
	
	
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
	public List<Campaign> getMyCampaigns() {
		return myCampaigns;
	}
	public void setMyCampaigns(List<Campaign> myCampaigns) {
		this.myCampaigns = myCampaigns;
	}
	
	@Override
	public String toString() {
		return "User [userId=" + userId + ", FirstName=" + FirstName + ", LastName=" + LastName + ", Email=" + Email
				+ "]";
	}

}
