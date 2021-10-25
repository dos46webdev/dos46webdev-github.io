import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoverPageComponentComponent } from './cover-page-component/cover-page-component.component';
import { LeftPageComponentComponent } from './left-page-component/left-page-component.component';
import { RightPageComponentComponent } from './right-page-component/right-page-component.component';

const routes: Routes = [
  { path: 'cover', component: CoverPageComponentComponent },
  { path: 'inhoud', component: RightPageComponentComponent},
  { path: 'inleiding', component: LeftPageComponentComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
