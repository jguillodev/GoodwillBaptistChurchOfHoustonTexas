/*Modules*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NavigationModule } from './navigation/navigation.module';
import { HomeModule } from './home/home.module';

/*Components*/
import { AppComponent } from './app.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { MainNavigationComponent } from './navigation/main-navigation/main-navigation.component';
import { EmployeeModule } from './employee/employee.module';
import { EmployeeLoginComponent } from './employee/employee-login/employee-login.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationModule,
    HomeModule,
    EmployeeModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    MainNavigationComponent,
  ]
})
export class AppModule { }
