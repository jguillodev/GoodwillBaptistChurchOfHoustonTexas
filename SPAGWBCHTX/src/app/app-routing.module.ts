import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';


const routes: Routes = [
  { path: 'sermons',
    loadChildren: ()=>import('./sermons/sermons.module').then(m=>m.SermonsModule) },
  { path: 'home', 
  loadChildren: ()=>import('./home/home.module').then(m=>m.HomeModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
