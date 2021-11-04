import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/shared/services/characters.service';
import { EpisodesService } from 'src/app/shared/services/episodes.service';
import { IsLoadingServiceService } from 'src/app/shared/services/local/is-loading-service.service';

@Component({
  selector: 'app-characters-details',
  templateUrl: './characters-details.component.html',
  styleUrls: ['./characters-details.component.scss']
})
export class CharactersDetailsComponent implements OnInit {


  character:any={}
  episodes:any=[];
  
  constructor(private isLoadingLocalService:IsLoadingServiceService, private route:ActivatedRoute, private characterService: CharactersService, private episodesService: EpisodesService) { }
 
  ngOnInit(): void {

    this.isLoadingLocalService.setIsLoading(true);

    this.route.paramMap.subscribe(params=> {
      const id:any= params.get("idCharacter");
      this.characterService.getCharacter(id).subscribe(character => {
        this.isLoadingLocalService.setIsLoading(false);
        this.character =character;
        console.log(this.character.episode) 
        for( let item of this.character.episode){
          this.episodesService.getEpisodesByUrl(item).subscribe(episode=> {
            this.episodes.push(episode);
            console.log(this.episodes)
            })
        }
      });
    }); 
    console.log(this.episodes)
  }

  
}
