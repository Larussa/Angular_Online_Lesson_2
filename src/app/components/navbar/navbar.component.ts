import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  brand: string = 'Form and table with a list of clients';
  name: string = 'Brazhko Larisa';
  constructor() { }

  ngOnInit() {
  }

}
