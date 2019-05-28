import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}
const HEROES: Hero[] = [
  { id: 1, name: 'Sibusiso' },
  { id: 2, name: 'Thapelo' },
  { id: 3, name: 'Zack' },
  { id: 4, name: 'Nomsa' },
  { id: 5, name: 'Zanele' },
  { id: 6, name: 'Keketso' },
  { id: 7, name: 'Sihle' },
  { id: 8, name: 'Khuhle' },
  { id: 9, name: 'Nathanael' },
  { id: 10, name: 'Celine' },
  { id: 11, name: 'Justice' },
  { id: 12, name: 'Nompilo' },
  { id: 13, name: 'Tshego'},
  { id: 14, name: 'Petronella'},
  { id: 15, name: 'Sisekho'},
  { id: 16, name: 'Buhle'},
  
  

];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mlab Codetibe Organisation';
  heroes: Hero[] = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
 

 
  }

