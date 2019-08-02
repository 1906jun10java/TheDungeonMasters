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
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "Campaign")
public class Campaign {

	public Campaign(String campaignName, int currentTurn, int currentRound) {

		super();
		this.campaignName = campaignName;
		this.currentTurn = currentTurn;
		this.currentRound = currentRound;
		this.entities = entities;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO, generator = "campaignSequence")
	@SequenceGenerator(allocationSize = 1, name = "campaignSequence", sequenceName = "SQ_CAMPAIGN_PK")
	@Column(name = "CAMPAIGN_ID")
	private int campaignId;

	@Column(name = "USER_ID")
	private int userId;

	@Column(name = "CAMPAIGN_NAME")
	private String campaignName;

	@Column(name = "CURRENT_TURN")
	private int currentTurn;

	@Column(name = "CURRENT_ROUND")
	private int currentRound;
	
	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, fetch=FetchType.EAGER)
	@JoinTable(name="CAMPAIGN_ENTITIES")
	private List<ActiveEntity> activeEntities;
	

	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinTable(name = "CAMPAIGN_ENTITY")
	@Column(name = "ENTITY")
	private List<ActiveEntity> entities;

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
	
	public List<ActiveEntity> getEntities() {
		return entities;
	}

	public void setEntities(List<ActiveEntity> entities) {
		this.entities = entities;
	}


	@Override
	public String toString() {
		return "Campaign [ campaignId=" + campaignId + ", campaignName=" + campaignName
				+ ", currentTurn=" + currentTurn + ", currentRound=" + currentRound + "]";
	}


}
