import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { createPopper } from '@popperjs/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public menuSetting: boolean = false;
  public liveFlag: boolean = false;
  public PrRequest: boolean = false;

  title = 'PineyBaptistChurch';
  serverResponse = '';

  userInput = '';
  constructor(private http: HttpClient) {}
  sendToServer() {
    this.http.post('http://localhost:3000/api/hello', { text: this.userInput }).subscribe((response: any) => {
      this.serverResponse = response.text;
      alert("I am here" + this.serverResponse);
      alert(this.serverResponse);
    });
  }



//workign
closePrRequest(event: any){
this.PrRequest = false;

}

flipMenu() {
this.menuSetting = !this.menuSetting;
return this.menuSetting;
}
openLive() {
this.liveFlag = !this.liveFlag;
this.menuSetting = false;
this.PrRequest = false;
//(<HTMLInputElement>document.getElementById('BodyMain')).style['background-color'] = 'transparent';
let color = (<HTMLInputElement>document.getElementById('BodyMain')).style.backgroundColor;
if(color == 'black'){
(<HTMLInputElement>document.getElementById('BodyMain')).style.backgroundColor = 'white';
}else{
(<HTMLInputElement>document.getElementById('BodyMain')).style.backgroundColor = 'black';
} 
return this.liveFlag;
}
openPrRequest() {
this.PrRequest = !this.PrRequest;
this.menuSetting = false;
this.liveFlag = false;
return this.PrRequest;
}
openFacebook() {
window.open('https://www.facebook.com/pineybaptistchurchoakdaletn', '_blank');
return;
}
getDirections(){
window.open('https://www.google.com/maps/dir//Piney+Church,+324+Piney+Church+Rd,+Oakdale,+TN+37829/@36.0156374,-84.5574862,17.5z/data=!4m8!4m7!1m0!1m5!1m1!1s0x885dc3aebbcb3ee9:0xa3e39087fe14bdf4!2m2!1d-84.5580329!2d36.0158697', '_blank');
return;
}

}
