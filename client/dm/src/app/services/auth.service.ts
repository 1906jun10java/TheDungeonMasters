<<<<<<< HEAD
<<<<<<< HEAD
import { Injectable } from '@angular/core';
=======
import {Injectable} from '@angular/core';
>>>>>>> startNewencounter
=======
import {Injectable} from '@angular/core';
>>>>>>> d349b4fb6aec940640c58c0bee9502aa98fd5350
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../models/User';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

// Base API URL
const apiUrl = 'http://localhost:8080/P2';

// Headers
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  isLoggedIn = false;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(sessionStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public getCurrentDungeonMasterValue(): User {
    return this.currentUserSubject.value;
  }

  // Login method
  login(data) {
<<<<<<< HEAD
    return this.http.post<DungeonMaster>(
      apiUrl + '/login', {data}
    ).pipe(map(dm => {
<<<<<<< HEAD
      if (dm) {
        sessionStorage.setItem('currentDungeonMaster', JSON.stringify(dm));
        this.currentDungeonMasterSubject.next(dm);
        return dm;
      } else {
        console.log('Login Error');
      }
=======
      sessionStorage.setItem('currentDungeonMaster', JSON.stringify(dm));
      this.currentDungeonMasterSubject.next(dm);
      return dm;
>>>>>>> startNewencounter
=======
    return this.http.post<User>(
      apiUrl + '/login', data, httpOptions
    ).pipe(map(user => {
      sessionStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      this.isLoggedIn = true;
      return user;
>>>>>>> d349b4fb6aec940640c58c0bee9502aa98fd5350
    }));
  }
}
