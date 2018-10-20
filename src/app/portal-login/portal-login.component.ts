import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portal-login',
  templateUrl: './portal-login.component.html',
  styleUrls: ['./portal-login.component.css']
})
export class PortalLoginComponent implements OnInit {

  loginBackground = 'assets/public/images/SchoolBackground.png';
  logo = 'assets/public/images/ACA-Logo.png';
  constructor() { }

  ngOnInit() {
  }

}
