import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  constructor(private http:HttpClient) { }

  getEpisodes(page:string) {
    return this.http.get('https://rickandmortyapi.com/api/episode/?page='+page)
  }

  getEpisode(id:number) {
    return this.http.get('https://rickandmortyapi.com/api/episode/'+id)
  }

  getEpisodesByUrl(url:string) {
    return this.http.get(url)
  }
}
