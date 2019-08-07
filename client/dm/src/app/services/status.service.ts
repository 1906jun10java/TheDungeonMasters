import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Condition} from '../models/Condition';
import {map} from 'rxjs/operators';

const apiUrl = 'http://localhost:8080/P2/conditions/';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  conditions: Condition[];

  constructor(
    private http: HttpClient
  ) {}

  getConditions() {
    return this.http.get<Condition[]>(apiUrl + '/all').pipe(
      map(condition => {
        return condition;
      }));
  }
}
