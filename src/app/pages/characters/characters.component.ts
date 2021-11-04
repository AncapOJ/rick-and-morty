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
  page:string='1';
  pages=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34];
  
  constructor(private isLoadingServiceService:IsLoadingServiceService,private charactersService:CharactersService) { }

  ngOnInit(): void {

    this.isLoadingServiceService.setIsLoading(true);

    this.charactersService.getCharacters(this.page).subscribe((characters)=> {
      this.isLoadingServiceService.setIsLoading(false);
      this.charactersList=characters;
      this.charactersList=this.charactersList.results;
      console.log(this.charactersList);
    })
  } 

  changePage(evento:any) {
    this.page = evento.path[0].innerText;
    this.ngOnInit();
  }

}
