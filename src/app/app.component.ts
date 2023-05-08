import { Component } from '@angular/core';
import { Router } from '@angular/router';

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








flipMenu() {
this.menuSetting = !this.menuSetting;
return this.menuSetting;
}
openLive() {
this.liveFlag = !this.liveFlag;
this.menuSetting = false;
this.PrRequest = false;
return this.liveFlag;
}
openPrRequest() {
this.PrRequest = !this.PrRequest;
this.menuSetting = false;
this.liveFlag = false;
return this.PrRequest;
}
}
