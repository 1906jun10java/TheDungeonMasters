package com.revature.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "ACTIVE_ENTITY") // stores monsters and players while
public class ActiveEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO, generator = "activeEntitySequence")
	@SequenceGenerator(allocationSize = 1, name = "activeEntitySequence", sequenceName = "SQ_ACTIVE_ENTITY_PK")
	@Column(name = "ACT_ENTITY_ID")
	private int id;
	@ManyToOne
	@JoinColumn(name = "CAMPAIGN_ID")
	private Campaign containingCampaign;
	@Column(name = "ACT_ENTITY_NAME")
	private String name;
	@Column(name = "ACT_HIT_POINTS")
	private int hp;
	@Column(name = "ACT_CURRENT_HIT_POINTS")
	private int currentHp;
	@Column(name = "ACT_ARMOR_CLASS")
	private int armorClass;
	@Column(name = "ACT_INITIATIVE_MOD")
	private int initiativeMod;
	@Column(name = "ACT_INITIATIVE_TOTAL")
	private int initiativeTotal;
	@Column(name = "ACT_TYPE") // will be either player or monster
	private String type;

	public ActiveEntity() {
		super();
	}
	public ActiveEntity(Campaign containingCampaign, String name, int hp, int currentHp, int armorClass,
			int initiativeMod, int initiativeTotal, String type) {
		super();
		this.containingCampaign = containingCampaign;
		this.name = name;
		this.hp = hp;
		this.currentHp = currentHp;
		this.armorClass = armorClass;
		this.initiativeMod = initiativeMod;
		this.initiativeTotal = initiativeTotal;
		this.type = type;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Campaign getContainingCampaign() {
		return containingCampaign;
	}

	public void setContainingCampaign(Campaign containingCampaign) {
		this.containingCampaign = containingCampaign;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getHp() {
		return hp;
	}

	public void setHp(int hp) {
		this.hp = hp;
	}

	public int getCurrentHp() {
		return currentHp;
	}

	public void setCurrentHp(int currentHp) {
		this.currentHp = currentHp;
	}

	public int getArmorClass() {
		return armorClass;
	}

	public void setArmorClass(int armorClass) {
		this.armorClass = armorClass;
	}

	public int getInitiativeMod() {
		return initiativeMod;
	}

	public void setInitiativeMod(int initiativeMod) {
		this.initiativeMod = initiativeMod;
	}

	public int getInitiativeTotal() {
		return initiativeTotal;
	}

	public void setInitiativeTotal(int initiativeTotal) {
		this.initiativeTotal = initiativeTotal;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

}
