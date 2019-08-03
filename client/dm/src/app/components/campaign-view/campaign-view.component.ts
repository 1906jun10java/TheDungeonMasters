import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {CampaignService} from '../../services/campaign.service';
import {Campaign} from '../../models/Campaign';

@Component({
  selector: 'app-campaign-view',
  templateUrl: './campaign-view.component.html',
  styleUrls: ['./campaign-view.component.css']
})
export class CampaignViewComponent implements OnInit {
  campaigns: Campaign[] = null;

  constructor(
    private authService: AuthService,
    private campaignService: CampaignService
  ) {}

  ngOnInit() {
    const userId = this.authService.getCurrentDungeonMasterValue().userId;
    this.campaignService.getCampaign(userId).subscribe(campaigns => {
      if (campaigns) {
        this.campaigns = campaigns;
      }
    });
  }
}
