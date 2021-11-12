import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoverPageComponentComponent } from './cover-page-component/cover-page-component.component';
import { VoorwoordComponent } from './voorwoord/voorwoord.component';
import { InhoudComponent } from './inhoud/inhoud.component';
import {MatListModule} from '@angular/material/list'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatGridListModule} from '@angular/material/grid-list'; 
import * as Hammer from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatMenuModule} from '@angular/material/menu';

import { FlexLayoutModule } from '@angular/flex-layout';
import { BestuurComponent } from './bestuur/bestuur.component';
import { ArchiefComponent } from './archief/archief.component';
import { SpelersVanToenComponent } from './spelers-van-toen/spelers-van-toen.component';
import { ToekomstKampweekComponent } from './toekomst-kampweek/toekomst-kampweek.component';
import { AirdomeComponent } from './airdome/airdome.component';
import { HoofdJeugdOpleidingComponent } from './hoofd-jeugd-opleiding/hoofd-jeugd-opleiding.component';
import { WalkingGKorfbalComponent } from './walking-g-korfbal/walking-g-korfbal.component';
import { KeesRodenburgComponent } from './kees-rodenburg/kees-rodenburg.component';
import { StafComponent } from './staf/staf.component';
import { TeamComponent } from './team/team.component';
import { GriftesideComponent } from './grifteside/grifteside.component';
import { LivestreamComponent } from './livestream/livestream.component';
import { HerbergPleinComponent } from './herberg-plein/herberg-plein.component';
import { DerdeHelftComponent } from './derde-helft/derde-helft.component';
import { SponsorenComponent } from './sponsoren/sponsoren.component';
import { VrijwilligersComponent } from './vrijwilligers/vrijwilligers.component';
import { ActiviteitenComponent } from './activiteiten/activiteiten.component';
import { ProgrammaSelectieComponent } from './programma-selectie/programma-selectie.component';

import { HttpClientModule } from '@angular/common/http';
// making hammer config (3)
export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any> {
    swipe: { direction: Hammer.DIRECTION_ALL },
  };
}

@NgModule({
  declarations: [
    AppComponent,
    CoverPageComponentComponent,
    VoorwoordComponent,
    InhoudComponent,
    BestuurComponent,
    ArchiefComponent,
    SpelersVanToenComponent,
    ToekomstKampweekComponent,
    AirdomeComponent,
    HoofdJeugdOpleidingComponent,
    WalkingGKorfbalComponent,
    KeesRodenburgComponent,
    StafComponent,
    TeamComponent,
    GriftesideComponent,
    LivestreamComponent,
    HerbergPleinComponent,
    DerdeHelftComponent,
    SponsorenComponent,
    VrijwilligersComponent,
    ActiviteitenComponent,
    ProgrammaSelectieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FlexLayoutModule,
    MatListModule,
    HttpClientModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,

    
  ],
  providers: [{ provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig }],
  bootstrap: [AppComponent]
})

export class AppModule { }
