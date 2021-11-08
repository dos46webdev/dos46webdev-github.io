import { LiveAnnouncer } from '@angular/cdk/a11y';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActiviteitenComponent } from './activiteiten/activiteiten.component';
import { AirdomeComponent } from './airdome/airdome.component';
import { ArchiefComponent } from './archief/archief.component';
import { BestuurComponent } from './bestuur/bestuur.component';
import { CoverPageComponentComponent } from './cover-page-component/cover-page-component.component';
import { DerdeHelftComponent } from './derde-helft/derde-helft.component';
import { GriftesideComponent } from './grifteside/grifteside.component';
import { HerbergPleinComponent } from './herberg-plein/herberg-plein.component';
import { HoofdJeugdOpleidingComponent } from './hoofd-jeugd-opleiding/hoofd-jeugd-opleiding.component';
import { InhoudComponent } from './inhoud/inhoud.component';
import { KeesRodenburgComponent } from './kees-rodenburg/kees-rodenburg.component';
import { LivestreamComponent } from './livestream/livestream.component';
import { ProgrammaSelectieComponent } from './programma-selectie/programma-selectie.component';
import { SpelersVanToenComponent } from './spelers-van-toen/spelers-van-toen.component';
import { SponsorenComponent } from './sponsoren/sponsoren.component';
import { StafComponent } from './staf/staf.component';
import { TeamComponent } from './team/team.component';
import { ToekomstKampweekComponent } from './toekomst-kampweek/toekomst-kampweek.component';
import { VoorwoordComponent } from './voorwoord/voorwoord.component';
import { VrijwilligersComponent } from './vrijwilligers/vrijwilligers.component';
import { WalkingGKorfbalComponent } from './walking-g-korfbal/walking-g-korfbal.component';

const routes: Routes = [
  
  { path: 'cover', component: CoverPageComponentComponent },
  {path: '',   redirectTo: '/cover', pathMatch: 'full' },
  { path: 'voorwoord', component: VoorwoordComponent},
  { path: 'inhoud', component: InhoudComponent},
  {path: 'bestuur',component: BestuurComponent},
  {path: 'archief', component: ArchiefComponent},
  {path: 'spelers-van-toen',component: SpelersVanToenComponent},
  {path: 'toekomst-kampweek', component: ToekomstKampweekComponent},
  {path: 'airdome', component: AirdomeComponent},
  {path: 'hoofd-jeugd-opleiding', component: HoofdJeugdOpleidingComponent},
  {path: 'walking-g-korfbal', component: WalkingGKorfbalComponent},
  {path: 'kees-rodenburg', component: KeesRodenburgComponent},
  {path: 'staf', component: StafComponent},
  {path: 'team', component: TeamComponent},
  {path: 'grifteside', component: GriftesideComponent},
  {path: 'livestream', component: LivestreamComponent},
  {path: 'herberg-plein', component: HerbergPleinComponent},
  {path: 'derde-helft', component: DerdeHelftComponent},
  {path: 'sponsoren', component: SponsorenComponent},
  {path: 'vrijwilligers', component: VrijwilligersComponent},
  {path: 'activiteiten', component: ActiviteitenComponent},
  {path: 'programma-selectie', component: ProgrammaSelectieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
