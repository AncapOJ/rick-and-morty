import { Component, OnInit } from '@angular/core';

import { CharactersService } from 'src/app/shared/services/characters.service';
import { IsLoadingServiceService } from 'src/app/shared/services/local/is-loading-service.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  charactersList:any=[];
  constructor(private isLoadingServiceService:IsLoadingServiceService,private charactersService:CharactersService) { }

  ngOnInit(): void {

    this.isLoadingServiceService.setIsLoading(true);

    this.charactersService.getCharacters().subscribe((characters)=> {
      this.isLoadingServiceService.setIsLoading(false);
      this.charactersList=characters;
      this.charactersList=this.charactersList.results;
      console.log(this.charactersList);
    })
  }

}
