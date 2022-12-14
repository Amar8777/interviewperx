import { Component, HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
   animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class AppComponent {
  title = 'perx';
  
constructor(){

}  @HostBinding('@.disabled')
  public animationsDisabled = false;

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }


  toggleAnimations() {
    this.animationsDisabled = !this.animationsDisabled;
  }
  
}
