import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "http://127.0.0.1:8000/api/users";

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest() {
    return this.httpClient.get(this.REST_API_SERVER);
  }
}