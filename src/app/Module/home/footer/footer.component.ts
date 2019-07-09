import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { FooterService } from './footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css',
  '../../../ratchet/css/ratchet.css',
  '../../../bootstrap/css/bootstrap.css',
]
})
export class FooterComponent implements OnInit {

 
  constructor(private http : HttpClient) { }
  //parents : any;
  categories : any
  response : any;
  cat : any;
  
  ngOnInit() {
    
    let obs = this.http.get('https://api.alabamarket.com/api/parents');
    obs.subscribe((response) => {
      this.response = response;

      // this.cat = wordsh(parent.name)

     // console.log(this.response)
      this.categories =this.response.categories
     // console.log(this.categories)
     // console.log(this.cat)
    });


    // function getWord(word : string){


    // }

    //   console.log(this.response)
    //   this.categories =this.response.categories
    //   console.log(this.categories)
    // });
    // this.response = parent

    
   
  }

  

  wordsh(stre : string){

    var firstWords = stre.toLocaleLowerCase().split(" ", 1);
    var res = firstWords.toLocaleString();
    var another = res.split(",", 1);

      return another//.toLocaleLowerCase();
    }


openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    // document.getElementById("openMenu").style.display = "block";
    // document.getElementById("closeMenu").style.display = "inline";

  }
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  toggle = false;
  toggleNav(){
    this.toggle = !this.toggle;
    if(this.toggle){
      document.getElementById("mySidenav").style.width = "250px";
    }
    else{
      document.getElementById("mySidenav").style.width = "0";
    }
  }



}


