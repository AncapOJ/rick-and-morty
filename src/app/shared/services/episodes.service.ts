import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  constructor(private http:HttpClient) { }

  getEpisodes() {
    return this.http.get('https://rickandmortyapi.com/api/episode')
  }
}
