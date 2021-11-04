import { Component, OnInit } from '@angular/core';
import { EpisodesService } from 'src/app/shared/services/episodes.service';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/shared/services/characters.service';

@Component({
  selector: 'app-episodes-details',
  templateUrl: './episodes-details.component.html',
  styleUrls: ['./episodes-details.component.scss']
})
export class EpisodesDetailsComponent implements OnInit {

  episode:any;
  characters:any=[];

  constructor(private episodesService: EpisodesService, private route: ActivatedRoute, private charactersService :CharactersService) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params=> {
      const id:any= params.get("idEpisode");
      this.episodesService.getEpisode(id).subscribe(episode => {
        
        this.episode =episode;
        console.log(this.episode)
        for(let item of this.episode.characters){
          this.charactersService.getCharacterByURL(item).subscribe(character=> {
            this.characters.push(character);
            console.log(this.characters)
            })
        }
      });
    });

    console.log(this.characters)
  }

  

}
