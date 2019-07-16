import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private http: HttpClient) { }

  find(id: number): Observable<any> {
    let resp = this.http.get<any>('https://swapi.co/api/people/'+id, { observe: 'response' });
    return resp;
  }

  findAll(): Observable<any> {
    let resp = this.http.get<any>('https://swapi.co/api/people/', { observe: 'response' });
    return resp;
  }
}
