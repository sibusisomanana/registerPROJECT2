import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../app.component';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  @Input()
  Hero: Hero;
  constructor() { }

  ngOnInit() {
  }

}
