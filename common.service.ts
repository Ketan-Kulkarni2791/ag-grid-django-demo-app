import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  readonly ApiUrl = "http://127.0.0.1:8000/api"

  constructor(private http: HttpClient) { }

  getInfoList():Observable<any[]>
  {
    return this.http.get<any[]>(this.ApiUrl + '/info/');
  }
}
