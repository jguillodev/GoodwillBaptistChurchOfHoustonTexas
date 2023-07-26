import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationRoutingModule } from './navigation-routing.module';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';



@NgModule({
  declarations: [
    MainNavigationComponent
  ],
  imports: [
    CommonModule,
    NavigationRoutingModule
  ]
})
export class NavigationModule { }
