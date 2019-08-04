import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {EncounterComponent} from './components/encounter/encounter.component';
import {ActiveEntityComponent} from './components/active-entity/active-entity.component';
import {CampaignViewComponent} from './components/campaign-view/campaign-view.component';
import {NavComponent} from './components/nav/nav.component';
import {EntityCardComponent} from './components/entity-card/entity-card.component';
import { LogComponent } from './components/log/log.component';
import { LogService } from './services/log.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EncounterComponent,
    ActiveEntityComponent,
    CampaignViewComponent,
    NavComponent,
    EntityCardComponent,
    LogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
