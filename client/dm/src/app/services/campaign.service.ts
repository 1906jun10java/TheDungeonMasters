import {Injectable} from '@angular/core';
import {Campaign} from '../models/Campaign';
import {HttpClient} from '@angular/common/http';

// Endpoint
const apiUrl = 'http://localhost:8080/P2/campaigns/user/';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  constructor(
    private http: HttpClient
  ) {}

  getCampaign(id) {
    return this.http.get<Campaign[]>(apiUrl + id);
  }
}
