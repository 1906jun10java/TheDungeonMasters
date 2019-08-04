import { Component, OnInit } from '@angular/core';
import { Entity } from '../../models/Entity';
import { MonsterService } from '../../services/monster.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'monster-vault',
  templateUrl: './monster-vault.component.html',
  styleUrls: ['./monster-vault.component.css']
})
export class MonsterVaultComponent implements OnInit {
  monsters: Entity[] = null;
  isShown = false;
  private modalElementId = 'modal-container';
  private overlayElementId = 'monster-modal-overlay';

  //Modal service is a custom event emitter which navbutton calls and to which
  //this subscribed.
  constructor(
    private monsterService: MonsterService,
    private modalService: ModalService
    ) { }

  ngOnInit() {
    if(this.modalService.subscription == undefined){
      this.modalService.subscription = 
      this.modalService.monsterModalEmitter.subscribe(() =>{
        this.toggle();
      });
    }
    this.monsterService.getAllMonsters().subscribe(monsters =>{
      if(monsters){
        this.monsters = monsters;
      }
    });
  }

  toggle(){
    if(!this.isShown){
      this.show();
      this.isShown = true;
    } else{
      this.hide();
      this.isShown = false;
    }
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
