import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Entity} from '../models/Entity';

const url = 'http://localhost:8080/P2/monsterVault';

const httpHeaders = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

//for adding a monster to the vault
@Injectable({
  providedIn: 'root'
})
export class MonsterService {

  private monsters: Observable<Entity>;

  constructor(private http: HttpClient) { }

  getAllMonsters(){
    return this.http.get<Entity[]>(url + '/returnAll');
  }

  addMonster(data){
    return this.http.post<Entity>(
      url + '/addMonster', data, httpHeaders)
  }

}
