package com.revature.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="CAMPAIGN")
public class Campaign {

	public Campaign(int userId, String campaignName, int currentTurn, int currentRound) {
		super();
		this.userId = userId;

		this.campaignName = campaignName;
		this.currentTurn = currentTurn;
		this.currentRound = currentRound;
	}
	
	@Column(name="USER_ID")
	private int userId;
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO, generator="campaignSequence")
	@SequenceGenerator(allocationSize=1, name="campaignSequence", sequenceName="SQ_CAMPAIGN_PK")
	@Column(name="CAMPAIGN_ID")
	private int campaignId;
	
	@Column(name="CAMPAIGN_NAME")
	private String campaignName;
	
	@Column(name="CURRENT_TURN")
	private int currentTurn;
	
	@Column(name="CURRENT_ROUND")
	private int currentRound;
	
	
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public int getCampaignId() {
		return campaignId;
	}
	public void setCampaignId(int campaignId) {
		this.campaignId = campaignId;
	}
	public String getCampaignName() {
		return campaignName;
	}
	public void setCampaignName(String campaignName) {
		this.campaignName = campaignName;
	}
	public int getCurrentTurn() {
		return currentTurn;
	}
	public void setCurrentTurn(int currentTurn) {
		this.currentTurn = currentTurn;
	}
	public int getCurrentRound() {
		return currentRound;
	}
	public void setCurrentRound(int currentRound) {
		this.currentRound = currentRound;
	}
	@Override
	public String toString() {
		return "Campaign [userId=" + userId + ", campaignId=" + campaignId + ", campaignName=" + campaignName
				+ ", currentTurn=" + currentTurn + ", currentRound=" + currentRound + "]";
	}
	
}
