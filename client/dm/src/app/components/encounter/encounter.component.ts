import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Entity } from 'src/app/models/Entity';

@Component({
  selector: 'app-encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.css']
})
export class EncounterComponent implements OnInit {

  constructor() { }

  entities = [
    // tslint:disable-next-line: max-line-length
    {id: 1, name: 'Falgathar', type: 'Player', maxHp: 42, currentHp: 2, armorClass: 13, conditions: [], initiativeModifier: 4, initiativeTotal: 22},
    // tslint:disable-next-line: max-line-length
    {id: 1, name: 'Hergethat', type: 'Player', maxHp: 42, currentHp: 2, armorClass: 27, conditions: [], initiativeModifier: 4, initiativeTotal: 5},
    // tslint:disable-next-line: max-line-length
    {id: 1, name: 'Lich', type: 'Player', maxHp: 42, currentHp: 2, armorClass: 183, conditions: [], initiativeModifier: 4, initiativeTotal: 55}
  ];

  sortByInitiative(entities): void {
    entities.sort((a, b) => a.initiativeTotal > b.initiativeTotal ? -1 : a.initiativeTotal < b.initiativeTotal ? 1 : 0);
  }

  checkTarget(): any {
    console.log('target checked');
  }

  addEffect(): any {
    console.log('Effect Added');
  }

  removeEffect(): any {
    console.log('Effrect Removed');
  }

  openModal(): void {

  }

  ngOnInit() {
    this.sortByInitiative(this.entities);
  }

}
