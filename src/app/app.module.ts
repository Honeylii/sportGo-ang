import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { PlayerProfileComponent } from './Player/player-profile/player-profile.component';
import { TeamProfileComponent } from './Team/team-profile/team-profile.component';
import { MobxAngularModule } from 'mobx-angular'; 
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { TestStateComponent } from './Auth/test-state/test-state.component';
import { TeamprofileComponent } from './teamprofile/teamprofile.component';
import { Auth } from 'src/stores/auth.store';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PlayerProfileComponent,
    TeamProfileComponent,
    PageNotFoundComponent,
    TestStateComponent,
    TeamprofileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MobxAngularModule,
  ],
  providers: [Auth],
  bootstrap: [AppComponent, RegisterComponent],
})
export class AppModule {}
