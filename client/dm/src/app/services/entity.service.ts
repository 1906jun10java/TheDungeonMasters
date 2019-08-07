import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

const apiUrl = 'http://localhost:8080/P2/activeEntity';

// Headers
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
      apiUrl + '/saveEntities',
      entity, httpOptions
    ).pipe(map(res => {
      return res;
    }));
  }
}
