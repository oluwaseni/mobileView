import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-agriculture',
  templateUrl: './agriculture.component.html',
  styleUrls: ['./agriculture.component.css']
})
export class AgricultureComponent implements OnInit {

  response : any;
  agriculture : any;

  constructor(private http : HttpClient) {

    let agric = this.http.get('https://api.alabamarket.com/api/parents');
    agric.subscribe((response) =>{
      this.response = response;
      this.agriculture = this.response.categories.children
      console.log(this.response);
      console.log(this.agriculture);
    })


   }

  ngOnInit() {
  }

}
