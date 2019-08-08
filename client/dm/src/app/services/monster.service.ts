import { Injectable, Output, EventEmitter } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Entity} from '../models/Entity';

const url = 'http://localhost:8080/P2/monsterVault';

//response type is text.  Yes, it sits outside of the other headers.
const headers = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'}), responseType: 'text' as 'json'
};

//for adding a monster to the vault
@Injectable({
  providedIn: 'root'
})
export class MonsterService {
  sendMonster = new EventEmitter<Entity>();

  constructor(private http: HttpClient) { }

  getAllMonsters(){
    return this.http.get<Entity[]>(url + '/returnAll');
  }

  //Post reqs have to subscribe
  addMonster(data){
    return this.http.post<any>(
      url + '/addMonster', data, headers);
  }

  relayMonster(monster){
    this.sendMonster.emit(monster);
  }

}
