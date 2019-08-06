import {Injectable} from '@angular/core';
import {Campaign} from '../models/Campaign';
import {HttpClient} from '@angular/common/http';

// Endpoint
const apiUrl = 'http://localhost:8080/P2/campaigns/';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  currentCampaign: Campaign;

  constructor(
    private http: HttpClient
  ) {}

  getCampaignsByUser(userId: number) {
    return this.http.get<Campaign[]>(apiUrl + '/user/' + userId);
  }

  getCampaign(campaignId: number) {
    return this.http.get<Campaign>(apiUrl + '/campaign/' + campaignId);
  }

  setCurrentCampaign(campaign: Campaign) {
    this.currentCampaign = campaign;
  }
}
