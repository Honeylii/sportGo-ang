
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  
import { RegisterComponent } from './Auth/register/register.component'; 
import { TestStateComponent } from './Auth/test-state/test-state.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { TeamprofileComponent } from './teamprofile/teamprofile.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'auth/register', component: RegisterComponent },
  { path: 'tests', component: TestStateComponent },
  // {path: 'contacts/edit/:contactId', component: EditContactComponent},
  // {path: 'contacts/view/:contactId', component: ViewContactComponent},
  { path: '**', component: PageNotFoundComponent },
  { path: 'teamprofile', component: TeamprofileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
