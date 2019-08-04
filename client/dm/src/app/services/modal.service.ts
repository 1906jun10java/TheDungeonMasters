import { Injectable, EventEmitter } from '@angular/core';    
import { Subscription } from 'rxjs/internal/Subscription';  

//Use this to toggle modals with the navbar
@Injectable({
  providedIn: 'root'
})
export class ModalService {

  monsterModalEmitter = new EventEmitter(); //Custom event for monsterModal
  subscription: Subscription;

  constructor() { }

  //emits event that monsterModal subscribes to
  toggleMonsterModal(){
    this.monsterModalEmitter.emit();
  }

}