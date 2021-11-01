import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http:HttpClient) { }

  getCharacters(page:string) {
    return this.http.get('https://rickandmortyapi.com/api/character/?page='+page) 
  }

  getCharacter(id:number) {
    return this.http.get('https://rickandmortyapi.com/api/character/'+id)
  }

  getCharacterByURL(url:string) {
    return this.http.get(url)
  }
}
