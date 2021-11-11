import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml} from '@angular/platform-browser';
@Component({
  selector: 'app-programma-selectie',
  templateUrl: './programma-selectie.component.html',
  styleUrls: ['./programma-selectie.component.scss']
})
export class ProgrammaSelectieComponent implements OnInit {

  eulaContent: SafeHtml = '';
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    fetch('../../assets/programma.html').then(res => res.text()).then(data => {
      this.eulaContent = this.sanitizer.bypassSecurityTrustHtml(data);
      console.log(this.eulaContent)
    })
  }

}
