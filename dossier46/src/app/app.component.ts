import { Component } from '@angular/core';
import {right,left, slideTo} from './route-animations';
import { RouterOutlet } from '@angular/router';
import { Router,NavigationEnd  } from '@angular/router';
import { InhoudComponent } from './inhoud/inhoud.component';
import {
  trigger,
  transition} from '@angular/animations';
import {MatCardModule} from '@angular/material/card'; 


@Component({
  selector: 'app-root',
  animations: [
    trigger('Slider', [
      transition(':increment', slideTo('right')),
      transition(':decrement', slideTo('left')),
    ]),
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  
  constructor(private router: Router){
    this.router = router;
    }
  routeNames = ['cover', 'voorwoord', 'inhoud','bestuur','archief',
                'spelers-van-toen','toekomst-kampweek','airdome',
                'hoofd-jeugd-opleiding','walking-g-korfbal','kees-rodenburg',
                'staf','team','grifteside','livestream','herberg-plein',
                'derde-helft','sponsoren','vrijwilligers','activiteiten',
                'programma-selectie']

  
  // console.log(this.currentRoute);
  public isMenuOpen: boolean = false;
  routeCnt = this.routeNames.length;
  index: number = this.routeNames.indexOf(this.router.url.replace('/',''));
  slides = 0;
  // index: number = 0;

  sideNavToggle(){
    this.isMenuOpen = !this.isMenuOpen;
  }

  onNext() {
    this.index = this.routeNames.indexOf(this.router.url.replace('/',''));
    
    console.log(this.index)
    if (this.index + 1 < this.routeCnt) {
      
      console.log('navigating to right page')
      this.index++;
      this.router.navigate(['/', this.routeNames[this.index]]);
    }else{
      console.log("no such page")
    }
  } 
  onPrevious(){
    this.index = this.routeNames.indexOf(this.router.url.replace('/',''));
    console.log(this.index)
      if (this.index - 1 >= 0) {
        console.log('navigating to left page')
        this.index--;
        this.router.navigate(['/', this.routeNames[this.index]]);
      } else{
        console.log("no such page")
      }
    } 
    onSwipeRight(event: any, data:any) {
      console.log("event right", event)
      this.slides = this.slides + data
  
      if (this.slides == 2) {
        this.slides = 0
      }
      console.log(this.slides)
    }

  navigateToPage(path: String){
    this.router.navigate(['/', path]);
    this.isMenuOpen = !this.isMenuOpen;

  }

  title = 'dossier46';

}


