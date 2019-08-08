import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

// Base URL
const apiUrl = 'http://localhost:8080/P2/activeEntity';

// HTTP options
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  responseType: 'text' as 'json'
};

@Injectable({
  providedIn: 'root'
})
export class EntityService {

  constructor(
    private http: HttpClient
  ) {}

  saveEntity(entity) {
    return this.http.post(
      apiUrl + '/saveEntities', entity, httpOptions
    ).pipe(map(res => {
      return res;
    }));
  }

  deleteEntity(entityId) {
    return this.http.post(
      apiUrl + '/delete/' + entityId, {responseType: 'text' as 'json'}
    ).pipe(map(res => {
      return res;
    }));
  }
}
