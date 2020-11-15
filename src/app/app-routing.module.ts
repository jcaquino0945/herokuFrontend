import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import {CasualComponent} from './casual/casual.component';
import {DenimComponent} from './denim/denim.component';
import {OxfordComponent} from './oxford/oxford.component';
import {TshirtComponent} from './tshirt/tshirt.component';
import {HomeComponent} from './home/home.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: 'home', component:  HomeComponent},
  { path: 'casual', component: CasualComponent },
  { path: 'denim', component: DenimComponent },
  { path: 'oxford', component: OxfordComponent },
  { path: 'tshirt', component: TshirtComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }