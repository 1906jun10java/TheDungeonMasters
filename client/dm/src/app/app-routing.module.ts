
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

import {CampaignViewComponent} from './components/campaign-view/campaign-view.component';

import { EncounterComponent } from './components/encounter/encounter.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'encounter', component: EncounterComponent },
  { path: 'campaign', component: CampaignViewComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
