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
>>>>>>> cccc5e383ca35cf1af12b288dfd6031494451187

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
<<<<<<< HEAD
  { path: 'encounter', component: EncounterComponent }
=======
  { path: 'campaign', component: CampaignViewComponent }
>>>>>>> cccc5e383ca35cf1af12b288dfd6031494451187
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
