import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Entity } from 'src/app/models/Entity';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Campaign } from 'src/app/models/Campaign';
import { CampaignService } from 'src/app/services/campaign.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.css']
})
export class EncounterComponent implements OnInit {

  @Input()
  entity: Entity;

  constructor(
    private modalService: NgbModal,
    private campaignService: CampaignService,
    private router: Router
  ) {  }

  entities = this.campaignService.currentCampaign.activeEntities;

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

  openEntityModal(entityModal) {
    this.modalService.open(entityModal);
  }

  openMonsterModal(addMonsterModal) {
    this.modalService.open(addMonsterModal);
  }

  onSelect(entity: Entity): void {
  this.selectedEntity = entity;
}

  updateEntity(value: number): void {
    this.selectedEntity.currentHp = value;
  }

  addMonster(monster): void {
    if (this.turnNumber === 1) {
    this.entities.push(monster);
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
    this.router.navigate(['/campaign']);
  }

  getCurrentCampaign(): Campaign {
    return this.campaignService.currentCampaign;
  }

  ngOnInit() {
    if (sessionStorage.getItem('currentUser')) {
      this.sortByInitiative(this.entities);
      this.setActiveEntity(this.turnNumber - 1);
      this.getCurrentCampaign();
    } else {
      this.router.navigate(['/login']);
    }
   
  }

}
