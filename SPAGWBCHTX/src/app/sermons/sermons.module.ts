import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SermonSeriesComponent } from './sermon-series/sermon-series.component';
import { SermonsRoutingModule } from './sermon-routing.module';




@NgModule({
  declarations: [
    SermonSeriesComponent
  ],
  imports: [
    CommonModule,
    SermonsRoutingModule
  ]
})
export class SermonsModule { }
