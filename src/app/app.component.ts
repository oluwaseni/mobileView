import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
              './bootstrap/css/bootstrap.css',
              './ratchet/css/ratchet.css'
]
})
export class AppComponent {
  title = 'mobile';

  constructor(private http : HttpClient){
    
  }
}
