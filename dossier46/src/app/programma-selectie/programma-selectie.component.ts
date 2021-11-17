import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml} from '@angular/platform-browser';


// export interface PeriodicElement {
//   name: string;
//   position: number;
//   stad: string;
// }

export interface Poule {
  name: string;
  position: string;
  stad: string;
}


export interface Programma {
  datum: string;
  tijd: string;
  team1: string;
  team2: string;
}



const ELEMENT_DATA: Poule[] = [
  {position: '1.', name: 'Fortuna/Delta Logistiek', stad: 'Delft'},
  {position: '2.', name: ' KZ/Thermo4U', stad: 'Koog aan de Zaan'},
  {position: '3,', name: 'Blauw-Wit (A)', stad: 'Amsterdam'},
  {position: '4.', name: 'LDODK/Rinsma Modeplein', stad: 'Gorredijk'},
  {position: '5.', name: 'Dalto/Klaverblad Verzekeringen', stad: 'Driebergen'},
  {position: '6.', name: 'KCC/CK Kozijnen', stad: 'Capelle aan den IJssel'},

];


const ELEMENT_DATA2: Poule[] = [
  {position: '7.', name: 'PKC/Vertom', stad: 'Papendrecht'},
  {position: '8.', name: 'TOP/LITTA', stad: 'Sassenheim'},
  {position: '9,', name: 'DOS’46', stad: 'Nijeveen'},
  {position: '10.', name: 'DVO/Accountor', stad: 'Bennekom'},
  {position: '11.', name: 'GG/IJskoud de Beste', stad: 'Wormer'},
  {position: '12.', name: 'Oost-Arnhem', stad: 'Arnhem'},

];

const ELEMENT_DATA3: Programma[] = [
  {datum: 'ZA. 20 NOV.', tijd: '13.45U.', team1: 'PKC/Vertom 2',team2:"DOS'46 2"},
  {datum: '', tijd: '15.30U.', team1: 'PKC/Vertom 1',team2:"DOS'46 1"},

  {datum: 'ZA. 27 NOV.', tijd: '18.15U.', team1: "DOS'46 2",team2:"DVO/Accountor 2"},
  {datum: '', tijd: '20.00U.', team1: "DOS'46 1",team2:"DVO/Accountor 1"},

  {datum: 'ZA. 4 DEC.', tijd: '15.15U.', team1: 'Oost-Arnhem 2',team2:"DOS'46 2"},
  {datum: '', tijd: '17.00U.', team1: 'Oost-Arnhem 1',team2:"DOS'46 1"},

  {datum: 'ZA. 11 DEC.', tijd: '17.15U.', team1: 'GG/IJskoud de Beste 2',team2:"DOS'46 2"},
  {datum: '', tijd: '19.00U.', team1: 'GG/IJskoud de Beste 1',team2:"DOS'46 1"},

  {datum: 'ZA. 18 DEC.', tijd: '18.15U.', team1: "DOS'46 2",team2:"TOP/LITTA 2"},
  {datum: '', tijd: '20.00U.', team1: "DOS'46 1",team2:"TOP/LITTA 1"},

  {datum: 'ZA. 8 JAN.', tijd: '18.15U.', team1: "DOS'46 2",team2:"PKC/Vertom 2"},
  {datum: '', tijd: '20.00U.', team1: "DOS'46 1",team2:"PKC/Vertom 1"},

  {datum: 'ZA. 15 JAN.', tijd: '17.40U.', team1: 'DVO/Accountor 2',team2:"DOS'46 2"},
  {datum: '', tijd: '19.30U.', team1: 'DVO/Accountor 1',team2:"DOS'46 1"},

  {datum: 'ZA. 22 JAN.', tijd: '18.15.', team1: "DOS'46  2",team2: "Oost-Arnhem2"},
  {datum: '', tijd: '20.00U.', team1: "DOS'46 1",team2:"Oost-Arnhem 1"},

  {datum: 'ZA. 20 NOV.', tijd: '18.15U.', team1: "DOS'46 2",team2:"GG/IJskoud de Beste 2"},
  {datum: '', tijd: '20.00U.', team1: "DOS'46 1",team2:"GG/IJskoud de Beste 1"},

  {datum: 'ZA. 20 NOV.', tijd: '17.45U.', team1: 'TOP/LITTA 2',team2:"DOS'46 2"},
  {datum: '', tijd: '19.30.', team1: 'TOP/LITTA 1',team2:"DOS'46 1"},


];


// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', stad: 1.0079},
//   {position: 2, name: 'Helium', stad: 4.0026},
//   {position: 3, name: 'Lithium', stad: 6.941},
//   {position: 4, name: 'Beryllium', stad: 9.0122},
//   {position: 5, name: 'Boron', stad: 10.811},
//   {position: 6, name: 'Carbon', stad: 12.0107},
// ];


@Component({
  selector: 'app-programma-selectie',
  templateUrl: './programma-selectie.component.html',
  styleUrls: ['./programma-selectie.component.scss']
})

export class ProgrammaSelectieComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) { }
  team1 = "DOS'46 1";
  team2 = "DOS'46 2";
  club = "DOS’46";


  displayedColumns: string[] = ['position', 'name', 'stad'];
  displayedColumns2: string[] = ['datum', 'tijd', 'team1','team2'];
  poulA = ELEMENT_DATA;
  poulB = ELEMENT_DATA2;

  public screenWidth: any;
  programma = ELEMENT_DATA3;
  mobile = false;
  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    if (window.innerWidth < 600){
      this.mobile = true;
      // this.displayedColumns2 = ['datum', 'team1','team2'];
    }

  }

  
  
  
}
