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
import { HeaderComponent } from './header/header.component';

import { baseURL } from './shared/baseurl';
import { HttpClientModule } from '@angular/common/http';

import { ProductService } from './services/product.service';
@NgModule({
  declarations: [
    AppComponent,
    CasualComponent,
    DenimComponent,
    OxfordComponent,
    TshirtComponent,
    HomeComponent,
    PagenotfoundComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductService, {provide: 'baseURL', useValue: baseURL}],
  bootstrap: [AppComponent]
})
export class AppModule { }
