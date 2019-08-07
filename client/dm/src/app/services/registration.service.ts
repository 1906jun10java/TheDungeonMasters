import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const url = 'http://localhost:8080/P2/register';

const httpHeaders = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  responseType: 'text' as 'json'
};

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  addNewUser(data){
    return this.http.post<any>(
      url, data, httpHeaders,
    );
  }
}
