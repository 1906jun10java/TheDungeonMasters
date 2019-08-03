import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.css']
})
export class EncounterComponent implements OnInit {

  checkTarget(): any {
    console.log('target checked');
  }

  addEffect(): any {
    console.log('Effect Added');
  }

  removeEffect(): any {
    console.log('Effrect Removed');
  }

  constructor() { }

  ngOnInit() {
  }

}
