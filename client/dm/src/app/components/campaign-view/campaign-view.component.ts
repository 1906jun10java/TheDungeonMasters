import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {CampaignService} from '../../services/campaign.service';
import {Campaign} from '../../models/Campaign';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Entity} from '../../models/Entity';
import {EntityService} from '../../services/entity.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-campaign-view',
  templateUrl: './campaign-view.component.html',
  styleUrls: ['./campaign-view.component.css']
})
export class CampaignViewComponent implements OnInit {
  campaigns: Campaign[] = null;
  currentCampaign: Campaign = null;
  newEntity: Entity;

  constructor(
    private authService: AuthService,
    private entityService: EntityService,
    private campaignService: CampaignService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.getCampaigns();
  }

  getCampaigns() {
    const userId = this.authService.getCurrentDungeonMasterValue().userId;
    this.campaignService.getCampaign(userId).subscribe(campaigns => {
      if (campaigns) {
        this.campaigns = campaigns;
        this.currentCampaign = this.campaigns[0];
      }
    });
  }

  setCurrentCampaign(id: number) {
    this.campaigns.forEach(c => {
      if (c.campaignId === id) {
        this.currentCampaign = c;
        return;
      }
    });
  }

  openAddPlayerModal(addPlayerModal) {
    this.newEntity = new Entity();
    this.newEntity.entityType = 'player';
    this.newEntity.campaginId = this.currentCampaign.campaignId;
    this.modalService.open(addPlayerModal);
  }
  openAddMonsterModal(addMonsterModal) {
    this.newEntity = new Entity();
    this.newEntity.entityType = 'monster';
    this.newEntity.campaginId = this.currentCampaign.campaignId;
    this.modalService.open(addMonsterModal);
  }
  saveNewEntity(modal) {
    console.log(JSON.stringify(this.newEntity));
    this.entityService.saveEntity(JSON.stringify(this.newEntity)
    ).pipe(first()).subscribe(res => {
      console.log(res);
    });
    modal.close();
  }
}
