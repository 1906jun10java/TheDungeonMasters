import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Entity } from 'src/app/models/Entity';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Campaign } from 'src/app/models/Campaign';

@Component({
  selector: 'app-encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.css']
})
export class EncounterComponent implements OnInit {

  @Input()
  entity: Entity;

  constructor(
    private modalService: NgbModal
  ) {  }

  entities = [
    // tslint:disable-next-line: max-line-length
    {id: 1, campaignId: 1, name: 'Falgathar', entityType: 'Player', hp: 42, currentHp: 2, armorClass: 13, conditions: [], initiativeMod: 4, initiativeTotal: 22},
    // tslint:disable-next-line: max-line-length
    {id: 2, campaignId: 1, name: 'Hergethat', entityType: 'Player', hp: 42, currentHp: 2, armorClass: 27, conditions: [], initiativeMod: 4, initiativeTotal: 5},
    // tslint:disable-next-line: max-line-length
    {id: 3, campaignId: 1, name: 'Lich', entityType: 'Player', hp: 42, currentHp: 2, armorClass: 183, conditions: [], initiativeMod: 4, initiativeTotal: 55}
  ];

  selectedEntity: Entity;
  activeEntity: Entity;
  roundNumber = 1;
  turnNumber = 1;

  setActiveEntity(turnNumber: number): void {
    this.activeEntity = this.entities[turnNumber];
  }

  sortByInitiative(entities): void {
    entities.sort((a, b) => a.initiativeTotal > b.initiativeTotal ? -1 : a.initiativeTotal < b.initiativeTotal ? 1 : 0);
  }

  addEffect(): any {
    console.log('Effect Added');
  }

  removeEffect(): any {
    console.log('Effrect Removed');
  }

  openEntityModal(entityModal) {
    this.modalService.open(entityModal);
  }

  onSelect(entity: Entity): void {
  this.selectedEntity = entity;
}

  updateEntity(value: number): void {
    this.selectedEntity.currentHp = value;
  }

  addMonster(): void {
    if (this.turnNumber === 1) {
      // tslint:disable-next-line: max-line-length
    this.entities.push({id: 3, campaignId: 1, name: 'Monster', entityType: 'Monster', hp: 58, currentHp: 26, armorClass: 55, conditions: [], initiativeMod: 5, initiativeTotal: 46});
    this.sortByInitiative(this.entities);
    }
  }

  passTurn(): void {
    if (this.turnNumber === this.entities.length) {
      this.roundNumber += 1;
      this.turnNumber = 1;
      this.setActiveEntity(this.turnNumber - 1);
    } else {
      this.turnNumber += 1;
      this.setActiveEntity(this.turnNumber - 1);
    }
  }

  saveEncounter(): void {
    console.log('Saved the campaign');
  }

  endEncounter(): void {
    console.log('End encounter and pass back to campaign');
  }

  getCurrentCampaign(): Campaign {
    return new Campaign();
  }

  ngOnInit() {
    this.sortByInitiative(this.entities);
    this.setActiveEntity(this.turnNumber - 1);
    this.getCurrentCampaign();
  }

}
