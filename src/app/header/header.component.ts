import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild(MatMenuTrigger)
  trigger!: MatMenuTrigger;
  loggedIn = false;
  infoUser:any
  
  someMethod() {
    this.trigger.openMenu();
  }
  constructor(
    private http: HttpService
  ) { }

  ngOnInit(): void {
    this.http.getMe().subscribe((res:any) => {
      // console.log(res)
      if(res) {
        this.loggedIn = true
        this.infoUser = res.data.data
      //  console.log(this.loggedIn)

      }else {
        localStorage.removeItem('logginToken')
       this.loggedIn = false; 
      //  console.log(this.loggedIn)
      }
    })
   
  }

}
