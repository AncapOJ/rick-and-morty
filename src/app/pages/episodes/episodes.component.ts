import { Component, OnInit } from '@angular/core';
import { EpisodesService } from 'src/app/shared/services/episodes.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  episodesList:any=[];

  constructor( private episodesService: EpisodesService) { }

  ngOnInit(): void {
    this.episodesService.getLocations().subscribe((episodes)=>{
      this.episodesList=episodes;
      this.episodesList=this.episodesList.results;
      console.log(this.episodesList)
    })
  }

}
