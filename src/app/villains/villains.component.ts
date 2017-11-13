import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Villain} from '../Villain';

@Component({
  selector: 'app-villains',
  templateUrl: './villains.component.html',
  styleUrls: ['./villains.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class VillainsComponent implements OnInit {

  villain : Villain = {
    id: 2,
    name: 'Windstorm villain'
  }

  constructor() { }

  ngOnInit() {
  }

}
