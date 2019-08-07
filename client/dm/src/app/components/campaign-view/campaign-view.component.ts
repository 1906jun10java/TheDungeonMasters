import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {CampaignService} from '../../services/campaign.service';
import {Campaign} from '../../models/Campaign';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Entity} from '../../models/Entity';
import {EntityService} from '../../services/entity.service';
import {Router} from '@angular/router';
import {StatusService} from '../../services/status.service';

@Component({
  selector: 'app-campaign-view',
  templateUrl: './campaign-view.component.html',
  styleUrls: ['./campaign-view.component.css']
})
export class CampaignViewComponent implements OnInit {
  campaigns: Campaign[] = null;
  currentCampaign: Campaign = null;
  currentCampaignId: number;
  conditions: string[] = null;
  activePlayers: Entity[] = null;
  activeMonsters: Entity[] = null;
  newEntity: Entity;
  newCampaign: Campaign;

  constructor(
    private authService: AuthService,
    private entityService: EntityService,
    private campaignService: CampaignService,
    private statusService: StatusService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    if (sessionStorage.getItem('currentUser')) {
      this.getCampaigns();
      this.getConditions();
    } else {
      this.router.navigate(['/login']);
    }
  }

  getCampaigns() {
    const userId = this.authService.getCurrentUserValue().userId;
    this.campaignService.getCampaignsByUser(userId).subscribe(campaigns => {
      if (campaigns) {
        this.campaigns = campaigns;
        if (this.currentCampaignId) {
          this.campaigns.forEach(c => {
            if (c.campaignId === this.currentCampaignId) {
              this.setCurrentCampaign(c);
            }
          });
        } else {
          this.currentCampaignId = this.campaigns[0].campaignId;
          this.setCurrentCampaign(this.campaigns[0]);
        }
      }
    });
  }

  getConditions() {
    this.statusService.getConditions().subscribe(conditions => {
      if (conditions) {
        this.conditions = conditions;
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
    this.campaigns.forEach(c => {
      if (c.campaignId === campaign.campaignId) {
        this.currentCampaignId = campaign.campaignId;
        this.campaignService.setCurrentCampaign(campaign);
        this.parseEntities(campaign);
      }
    });
  }

  openAddCampaignModal(addCampaignModal) {
    this.newCampaign = new Campaign();
    this.newCampaign.userId = this.authService.getCurrentUserValue().userId;
    this.newCampaign.currentRound = 1;
    this.newCampaign.currentTurn = 1;
    this.modalService.open(addCampaignModal);
  }

  saveNewCampaign(modal) {
    const json = JSON.stringify(this.newCampaign);
    console.log(json);
    this.campaignService.saveCampaign(json).subscribe(res => {
      if (res === 'Added Campaign: ' + this.newCampaign.campaignName) {
        this.campaigns.push(this.newCampaign);
      }
    });
    modal.close();
  }

  openAddPlayerModal(addPlayerModal) {
    this.newEntity = new Entity();
    this.newEntity.entityType = 'player';
    this.newEntity.campaignId = this.currentCampaignId;
    this.modalService.open(addPlayerModal);
  }

  openAddMonsterModal(addMonsterModal) {
    this.newEntity = new Entity();
    this.newEntity.entityType = 'monster';
    this.newEntity.campaignId = this.currentCampaignId;
    this.modalService.open(addMonsterModal);
  }

  saveNewEntity(modal) {
    const json = JSON.stringify(this.newEntity);
    this.entityService.saveEntity(json).subscribe(res => {
      if (res === 'Entities are added') {
        this.getCampaigns();
      }
    });
    modal.close();
  }
}
