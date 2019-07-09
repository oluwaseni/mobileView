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
<<<<<<< HEAD
  cat : any;
 
=======
>>>>>>> 07aac523f77cfd4b4bd351fc2a4bf47fddfd2362
  ngOnInit() {
    
    let obs = this.http.get('https://api.alabamarket.com/api/parents');
    obs.subscribe((response) => {
      this.response = response;
<<<<<<< HEAD
      // this.cat = wordsh(parent.name)

     // console.log(this.response)
      this.categories =this.response.categories
     // console.log(this.categories)
     // console.log(this.cat)
    });


    function getWord(word : string){


    }
=======
      console.log(this.response)
      this.categories =this.response.categories
      console.log(this.categories)
    });
>>>>>>> 07aac523f77cfd4b4bd351fc2a4bf47fddfd2362
    // this.response = parent

    
   
  }
<<<<<<< HEAD
  

  wordsh(stre : string){

    var firstWords = stre.toLocaleLowerCase().split(" ", 1);
    var res = firstWords.toLocaleString();
    var another = res.split(",", 1);

      return another//.toLocaleLowerCase();
    }
=======

>>>>>>> 07aac523f77cfd4b4bd351fc2a4bf47fddfd2362

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


