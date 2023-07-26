import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<div>{{pageHeader}}</div>',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'SPAGWBCHTX';
  pageHeader: string = "Memebers"
}
