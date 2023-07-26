import { Component } from '@angular/core';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.sass']
})
export class MemberDetailsComponent {
  Name : string = "Joshua";
  Branch : string = "Parking";
  Mobile : number = 7135602846;
  Gender : string = "Male";
  Age : number = 35;
}
