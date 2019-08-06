import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {CampaignService} from '../../services/campaign.service';
import {Campaign} from '../../models/Campaign';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Entity} from '../../models/Entity';
import {EntityService} from '../../services/entity.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-campaign-view',
  templateUrl: './campaign-view.component.html',
  styleUrls: ['./campaign-view.component.css']
})
export class CampaignViewComponent implements OnInit {
  campaigns: Campaign[] = null;
  currentCampaign: Campaign = null;
  activePlayers: Entity[] = null;
  activeMonsters: Entity[] = null;
  newEntity: Entity;

  constructor(
    private authService: AuthService,
    private entityService: EntityService,
    private campaignService: CampaignService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    if (sessionStorage.getItem('currentUser')) {
      this.getCampaigns();
    }
  }

  getCampaigns() {
    const userId = this.authService.getCurrentUserValue().userId;
    this.campaignService.getCampaignsByUser(userId).subscribe(campaigns => {
      if (campaigns) {
        this.campaigns = campaigns;
        this.setCurrentCampaign(this.campaigns[0]);
      }
    });
  }

  parseEntities(campaign: Campaign) {
    this.activePlayers = [];
    this.activeMonsters = [];

    campaign.activeEntities.forEach(e => {
      if (e.entityType === 'player') {
        this.activePlayers.push(e);
      }
      if (e.entityType === 'monster') {
        this.activeMonsters.push(e);
      }
    });
  }

  setCurrentCampaign(campaign: Campaign) {
    this.currentCampaign = campaign;
    this.campaignService.setCurrentCampaign(campaign);
    this.parseEntities(campaign);
  }

  openAddPlayerModal(addPlayerModal) {
    this.newEntity = new Entity();
    this.newEntity.entityType = 'player';
    this.newEntity.campaignId = this.currentCampaign.campaignId;
    this.modalService.open(addPlayerModal);
  }
  openAddMonsterModal(addMonsterModal) {
    this.newEntity = new Entity();
    this.newEntity.entityType = 'monster';
    this.newEntity.campaignId = this.currentCampaign.campaignId;
    this.modalService.open(addMonsterModal);
  }
  saveNewEntity(modal) {
    const json = JSON.stringify(this.newEntity);
    this.entityService.saveEntity(json).subscribe(res => {
      if (res === 'Entities are added') {
        if (this.newEntity.entityType === 'player') {
          this.activePlayers.push(this.newEntity);
        } else {
          this.activeMonsters.push(this.newEntity);
        }
      }
    });
    modal.close();
  }
}
