import { Component, OnInit } from '@angular/core';
import { Entity } from '../../models/Entity';
import { MonsterService } from '../../services/monster.service';

@Component({
  selector: 'app-monster-vault',
  templateUrl: './monster-vault.component.html',
  styleUrls: ['./monster-vault.component.css']
})
export class MonsterVaultComponent implements OnInit {
  monsters: Entity[] = null;

  constructor(private monsterService: MonsterService) { }

  ngOnInit() {
    this.monsterService.getAllMonsters().subscribe(monsters =>{
      if(monsters){
        this.monsters = monsters;
      }
    });
  }

  //TODO make monster from form
  createMonster(){

  }

}
