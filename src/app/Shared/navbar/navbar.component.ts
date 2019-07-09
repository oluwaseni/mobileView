import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css', 
  '../../ratchet/css/ratchet.css',
  '../../bootstrap/css/bootstrap.css'
]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
