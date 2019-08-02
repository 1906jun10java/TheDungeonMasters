package com.revature.beans;

public class Campaign {

	public Campaign(int userId, int campaignId, String campaignName, int currentTurn, int currentRound) {
		super();
		this.userId = userId;
		this.campaignId = campaignId;
		this.campaignName = campaignName;
		this.currentTurn = currentTurn;
		this.currentRound = currentRound;
	}
	private int userId;
	private int campaignId;
	private String campaignName;
	private int currentTurn;
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
