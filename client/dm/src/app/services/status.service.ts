import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Condition } from '../models/Condition';

const apiUrl = 'http://localhost:8080/P2/conditions/';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  conditions: string[];
  constructor(
    private http: HttpClient
  ) {}

  getConditions() {
    return this.http.get<string[]>(apiUrl + '/all').pipe(
      map(condition => {
        conditions.add(condition);
      }));
  }
}
