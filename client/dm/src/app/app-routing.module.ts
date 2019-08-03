<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { EncounterComponent } from './components/encounter/encounter.component';
=======
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {CampaignViewComponent} from './components/campaign-view/campaign-view.component';
>>>>>>> d349b4fb6aec940640c58c0bee9502aa98fd5350

<<<<<<< HEAD
=======

>>>>>>> startNewencounter
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
<<<<<<< HEAD
  { path: 'encounter', component: EncounterComponent }
<<<<<<< HEAD
=======

>>>>>>> startNewencounter
=======
  { path: 'campaign', component: CampaignViewComponent }
>>>>>>> d349b4fb6aec940640c58c0bee9502aa98fd5350
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
