import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kees-rodenburg',
  templateUrl: './kees-rodenburg.component.html',
  styleUrls: ['./kees-rodenburg.component.scss']
})
export class KeesRodenburgComponent implements OnInit {
  mobile: Boolean = false;
  constructor() { }

  ngOnInit() {
    
    if (window.screen.width === 959) { // 768px portrait
      this.mobile = true;
    }
  }

}
