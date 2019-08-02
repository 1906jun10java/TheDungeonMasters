package com.revature.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="ACTIVE_ENTITY") //stores monsters and players while
public class ActiveEntity {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO, generator="activeEntitySequence")
	@SequenceGenerator(allocationSize=1, name="activeEntitySequence", sequenceName="SQ_ACTIVE_ENTITY_PK")
	@Column(name="ACT_ENTITY_ID")
	private int id;
	@Column(name="ACT_ENTITY_NAME")
	private String name;
	@Column(name="ACT_HIT_POINTS")
	private int hp;
	@Column(name="ACT_CURRENT_HIT_POINTS")
	private int currentHp;
	@Column(name="ACT_ARMOR_CLASS")
	private int armorClass;
	@Column(name="ACT_INITIATIVE_MOD")
	private int initiativeMod;
	@Column(name="ACT_INITIATIVE_TOTAL")
	private int initiativeTotal;
	@Column(name="ACT_TYPE")  //will be either player or monster
	private String type;
}
