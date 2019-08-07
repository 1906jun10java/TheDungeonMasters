import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
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

  constructor(private http: HttpClient) { }

  getAllMonsters(){
    return this.http.get<Entity[]>(url + '/returnAll');
  }

  //Post reqs have to subscribe
  addMonster(data){
    return this.http.post<any>(
      url + '/addMonster', data, headers).subscribe(r=>{});
  }

}
