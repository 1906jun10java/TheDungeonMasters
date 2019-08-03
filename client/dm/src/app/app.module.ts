import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EncounterComponent } from './components/encounter/encounter.component';
import { FormsModule } from '@angular/forms';
import { ActiveEntityComponent } from './components/active-entity/active-entity.component';
import {CampaignViewComponent} from './components/campaign-view/campaign-view.component';
import {NavComponent} from './components/nav/nav.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EncounterComponent,
    ActiveEntityComponent,
    CampaignViewComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
