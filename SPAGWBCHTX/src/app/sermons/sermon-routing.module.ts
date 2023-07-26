import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SermonSeriesComponent } from './sermon-series/sermon-series.component';



const routes: Routes = [
  {path: 'series', 
  component: SermonSeriesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SermonsRoutingModule { }
