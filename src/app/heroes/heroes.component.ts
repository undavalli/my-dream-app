import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Hero} from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  heroes :Hero[];
  
  selectedHero:Hero;
  
  onSelect(hero:Hero): void{
    this.selectedHero=hero;
  }
   
 // hero : Hero = {
  //  id: 1,
   // name: 'windstorm'
 // }
  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void{
    this.heroes  = this.heroService.getHeroes();
  }

}
