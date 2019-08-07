import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Entity } from '../../models/Entity';
import { MonsterService } from '../../services/monster.service';
import { ModalService } from '../../services/modal.service';
import { EntityCardComponent } from '../entity-card/entity-card.component';

@Component({
  selector: 'monster-vault',
  templateUrl: './monster-vault.component.html',
  styleUrls: ['./monster-vault.component.css']
})
export class MonsterVaultComponent implements OnInit {
  selectedMonster: Entity;
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
    this.refreshMonsters();
    if (this.modalService.subscription == undefined) {
      this.modalService.subscription =
        this.modalService.monsterModalEmitter.subscribe(() => {
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

  refreshMonsters() {
    this.monsterService.getAllMonsters().subscribe(monsters => {
      if (monsters) {
        this.monsters = monsters;
      }
    });
  }

  toggle() {
    this.isShown ? this.hide() : this.show();
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

  selectMonster(monster: Entity) {
    this.monsterService.relayMonster(monster);
    this.hide();
  }

  createMonster() {
    const formData = this.newMonsterForm.getRawValue();
    let newMonster: Entity = new Entity();
    newMonster.name = formData.name;
    newMonster.hp = formData.hp;
    newMonster.armorClass = formData.armorClass;
    newMonster.initiativeMod = formData.initiativeMod;
    newMonster.currentHp = formData.hp;
    newMonster.initiativeTotal = formData.initiativeMod;
    newMonster.entityType = 'monster';
    this.monsterService.addMonster(newMonster).subscribe(resp => {
      this.refreshMonsters();
    });
  }

}
