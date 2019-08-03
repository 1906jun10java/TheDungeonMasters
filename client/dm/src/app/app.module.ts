import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

<<<<<<< HEAD
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EncounterComponent } from './components/encounter/encounter.component';
import { FormsModule } from '@angular/forms';
import { ActiveEntityComponent } from './components/active-entity/active-entity.component';
=======
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CampaignViewComponent} from './components/campaign-view/campaign-view.component';
import {NavComponent} from './components/nav/nav.component';
>>>>>>> d349b4fb6aec940640c58c0bee9502aa98fd5350

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
<<<<<<< HEAD
    EncounterComponent,
    ActiveEntityComponent
=======
    CampaignViewComponent,
    NavComponent
>>>>>>> d349b4fb6aec940640c58c0bee9502aa98fd5350
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
