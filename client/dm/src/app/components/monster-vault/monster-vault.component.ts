import { Component, OnInit } from '@angular/core';
import { Entity } from '../../models/Entity';
import { MonsterService } from '../../services/monster.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-monster-vault',
  templateUrl: './monster-vault.component.html',
  styleUrls: ['./monster-vault.component.css']
})
export class MonsterVaultComponent implements OnInit {
  monsters: Entity[] = null;
  isShown = false;
  private modalElementId = 'modal-container';
  private overlayElementId = 'monster-modal-overlay';

  constructor(private monsterService: MonsterService,
    private modalService: ModalService
    ) { }

  ngOnInit() {
    if(this.modalService.subscription == undefined){
      this.modalService.subscription = 
      this.modalService.toggleMonsterModal.subscribe(() =>{
        this.toggle();
      });
    })
    this.monsterService.getAllMonsters().subscribe(monsters =>{
      if(monsters){
        this.monsters = monsters;
      }
    });
  }

  toggle(){
    this.modalService
  }

  show() {
    document.getElementById(this.modalElementId).className = 'show';
    document.getElementById(this.overlayElementId).className = 'show';
  }

  hide() {
    document.getElementById(this.modalElementId).className = 'hidden';
    document.getElementById(this.overlayElementId).className = 'hidden';
  }

  //TODO make monster from form
  createMonster(){

  }

}
