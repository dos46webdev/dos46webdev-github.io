import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoverPageComponentComponent } from './cover-page-component/cover-page-component.component';
import { RightPageComponentComponent } from './right-page-component/right-page-component.component';
import { LeftPageComponentComponent } from './left-page-component/left-page-component.component';
import {MatCardModule} from '@angular/material/card'; 
@NgModule({
  declarations: [
    AppComponent,
    CoverPageComponentComponent,
    RightPageComponentComponent,
    LeftPageComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
