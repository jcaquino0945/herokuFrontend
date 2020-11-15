import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//ngx-bootstrap

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CasualComponent } from './casual/casual.component';
import { DenimComponent } from './denim/denim.component';
import { OxfordComponent } from './oxford/oxford.component';
import { TshirtComponent } from './tshirt/tshirt.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    CasualComponent,
    DenimComponent,
    OxfordComponent,
    TshirtComponent,
    HomeComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
