import { Component } from '@angular/core';
import {right,left} from './route-animations';
import { RouterOutlet } from '@angular/router';
import { Router,NavigationEnd  } from '@angular/router';
import {
  trigger,
  transition} from '@angular/animations';
import {MatCardModule} from '@angular/material/card'; 


@Component({
  selector: 'app-root',
  animations: [
    trigger('Slider', [
      transition(':increment', right),
      transition(':decrement', left),
    ]),
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  constructor(private router: Router){}

  routeNames = ['cover', 'inhoud', 'inleiding']
  currentRoute = this.routeNames[0]
  routeCnt = this.routeNames.length
  
  index: number = 0;
  onNext() {
    if (this.index + 1 < this.routeCnt) {
      
      console.log('navigating to right page')
      this.index++;
      this.router.navigate(['/', this.routeNames[this.index]]);
    }else{
      console.log("no such page")
    }
  } 
  onPrevious(){
      if (this.index - 1 >= 0) {
        console.log('navigating to left page')
        this.index--;
        this.router.navigate(['/', this.routeNames[this.index]]);
      } else{
        console.log("no such page")
      }
    } 
  
  // navigateToPage(direction: String): {
  //   if (direction == 'right') {
  //     index += 1;
  //   }

  // }
  title = 'dossier46';
  // prepareRoute() {
  //   if (this.index < this.prevIndex){
  //     return 'isLeft'
  //   } else {
  //     return 'isRight'
  //   }
  //   // console.log(outlet.activatedRouteData['animation'])
  //   // return outlet.activatedRouteData['animation'];
  // }
}


