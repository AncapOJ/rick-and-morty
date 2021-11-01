import { Component, OnInit } from '@angular/core';
import { EpisodesService } from 'src/app/shared/services/episodes.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  episodesList:any=[];
  page:string='1';
  pages=[1,2,3];

  constructor( private episodesService: EpisodesService) { }

  ngOnInit(): void {
    this.episodesService.getEpisodes(this.page).subscribe((episodes)=>{
      this.episodesList=episodes;
      this.episodesList=this.episodesList.results;
      console.log(this.episodesList)
    })
  }

  changePage(evento:any) {
    this.page = evento.path[0].innerText;
    this.ngOnInit();
  }

}
