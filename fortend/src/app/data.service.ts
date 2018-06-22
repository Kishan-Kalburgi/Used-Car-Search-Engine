import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  addUser(item){
    return this.http.post("https://car-search-engine.herokuapp.com/saveCar", item)
  }

  getUserList(id){
    return this.http.get("https://car-search-engine.herokuapp.com/getCarList/"+ id)
  }
}
