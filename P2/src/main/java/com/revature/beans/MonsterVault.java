package com.revature.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;


@Entity
@Table(name="MONSTER_VAULT")
public class MonsterVault {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO, generator="monsterSequence")
	@SequenceGenerator(allocationSize=1, name="monsterSequence", sequenceName="SQ_MONSTER_PK")
	@Column(name="ENTITY_ID")
	private int id;
	@Column(name="ENTITY_NAME")
	private String name;
	@Column(name="HIT_POINTS")
	private int hp;
	@Column(name="CURRENT_HP")
	private int currentHp;
	@Column(name="ARMOR_CLASS")
	private int armorClass;
	@Column(name="INITIATIVE_MOD")
	private int initiativeMod;
	@Column(name = "INITIATIVE_TOTAL")
	private int initiativeTotal;
	@Column(name = "TYPE")
	private String type;
	
	public MonsterVault() {}
	
	public MonsterVault(String name, int hp, int armorClass, int initiativeMod) {
		super();
		this.name = name;
		this.hp = hp;
		this.armorClass = armorClass;
		this.initiativeMod = initiativeMod;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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
	
}
