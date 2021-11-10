import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inhoud',
  templateUrl: './inhoud.component.html',
  styleUrls: ['./inhoud.component.scss']
})
export class InhoudComponent implements OnInit {

  
  constructor(private router: Router){
    this.router = router;
    }

  navigateToPage(path: String){
    this.router.navigate(['/', path]);
    console.log('click')

  }
  ngOnInit(): void {
  }

}
