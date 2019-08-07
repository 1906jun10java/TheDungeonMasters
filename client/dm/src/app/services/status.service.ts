import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Condition } from '../models/Condition';
import { map } from 'rxjs/operators';

const apiUrl = 'http://localhost:8080/P2/conditions/';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  conditions: string[];
  constructor(
    private http: HttpClient
  ) {}

  getConditions(): string[] {
    this.setConditions();
    return this.conditions;
  }

  setConditions() {
    return this.http.get<string[]>(apiUrl + '/all').pipe(
      map(condition => {
        this.conditions = condition;
      }));
  }
}
