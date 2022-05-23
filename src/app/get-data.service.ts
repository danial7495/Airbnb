import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Albums } from './albums';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http : HttpClient) { }

  getAll() : Observable<Albums[]> {
    return this.http.get<Albums[]>("https://jsonplaceholder.typicode.com/albums");
  }
}
