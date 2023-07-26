import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';



const routes: Routes = [
  {path:'navigation', component: MainNavigationComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }
