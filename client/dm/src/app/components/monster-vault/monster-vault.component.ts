import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  newMonsterForm: FormGroup;
  private modalElementId = 'modal-container';
  private overlayElementId = 'monster-modal-overlay';

  //Modal service is a custom event emitter which navbutton calls and to which
  //this subscribed.
  constructor(
    private formBuilder: FormBuilder,
    private monsterService: MonsterService,
    private modalService: ModalService
    ) { }

  ngOnInit() {
    this.monsterService.getAllMonsters().subscribe(monsters =>{
      if(monsters){
        this.monsters = monsters;
      }
    });
    if(this.modalService.subscription == undefined){
      this.modalService.subscription = 
      this.modalService.monsterModalEmitter.subscribe(() =>{
        this.toggle();
      });
    }
    this.newMonsterForm = this.formBuilder.group({
      name: ['', Validators.required],
      hp: ['', Validators.required],
      armorClass: ['', Validators.required],
      initiativeMod: ['', Validators.required]
    });
  }

  toggle(){
    !this.isShown ? this.hide() : this.show();
  }

  show() {
    document.getElementById(this.modalElementId).className = 'show';
    document.getElementById(this.overlayElementId).className = 'show';
    this.isShown = true;
  }

  hide() {
    document.getElementById(this.modalElementId).className = 'hidden';
    document.getElementById(this.overlayElementId).className = 'hidden';
    this.isShown = false;
  }

  //TODO make monster from form
  createMonster(){
    const formData = this.newMonsterForm.getRawValue();
    console.log(formData);
    postMonster: Entity;
    
  }

}
