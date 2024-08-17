import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingingComponent } from './singing/singing.component';
import { DanceComponent } from './dance/dance.component';
import { SportsComponent } from './sports/sports.component';

const routes: Routes = [
  {path:'sing',component:SingingComponent},
  {path:'dance',component:DanceComponent},
  {path:'paint',component:SportsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
