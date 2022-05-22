import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  flightName = 'Nagpur to Pune';
  availableTicket = 150;

  constructor(){

  }


  bookTicket(){
    this.availableTicket = this.availableTicket - 1;
    if(this.availableTicket){
      
    }
    console.log('bookticket',this.availableTicket );
  }

  cancelTicket(){
    this.availableTicket = this.availableTicket + 1;
    console.log("cancelticket");
  }





































}
