import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml} from '@angular/platform-browser';
@Component({
  selector: 'app-vrijwilligers',
  templateUrl: './vrijwilligers.component.html',
  styleUrls: ['./vrijwilligers.component.scss']
})


export class VrijwilligersComponent implements OnInit {
  eulaContent: SafeHtml = '';
  constructor(private sanitizer: DomSanitizer) { }
  

  ngOnInit(): void {
    fetch('../../assets/Vrijwilligers_DOS.html').then(res => res.text()).then(data => {
      this.eulaContent = this.sanitizer.bypassSecurityTrustHtml(data);
      console.log(this.eulaContent)
    })
    
  }

}
