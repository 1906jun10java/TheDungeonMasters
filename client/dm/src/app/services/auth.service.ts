import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {DungeonMaster} from '../models/DungeonMaster';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

// Base API URL
const apiUrl = '';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentDungeonMasterSubject: BehaviorSubject<DungeonMaster>;
  public currentDungeonMaster: Observable<DungeonMaster>;

  constructor(private http: HttpClient) {
    this.currentDungeonMasterSubject = new BehaviorSubject<DungeonMaster>(
      JSON.parse(sessionStorage.getItem('currentDungeonMaster'))
    );
    this.currentDungeonMaster = this.currentDungeonMasterSubject.asObservable();
  }

  public getCurrentDungeonMasterValue(): DungeonMaster {
    return this.currentDungeonMasterSubject.value;
  }

  // Login method
  login(data) {
    return this.http.post<DungeonMaster>(
      apiUrl + '/login', {data}
    ).pipe(map(dm => {
      if (dm) {
        sessionStorage.setItem('currentDungeonMaster', JSON.stringify(dm));
        this.currentDungeonMasterSubject.next(dm);
        return dm;
      } else {
        console.log('Login Error');
      }
    }));
  }
}
