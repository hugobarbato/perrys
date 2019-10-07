import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // Serviço para consumir a api:
  private url:string = "http://api-desafio-front.justdigital.com.br/";
  constructor(public http:HttpClient) { }
  getProducts():Observable<any>{
    return this.http.get(this.url);
  }
}
