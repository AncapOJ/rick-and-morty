import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(private http:HttpClient) { }

  getLocations(page:string) {
    return this.http.get('https://rickandmortyapi.com/api/location?page='+page)
  }

  getLocation(id:number) {
    return this.http.get('https://rickandmortyapi.com/api/location/'+id)
  }

}
