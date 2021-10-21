import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/shared/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  charactersList:any=[];
  constructor(private charactersService:CharactersService) { }

  ngOnInit(): void {

    this.charactersService.getCharacters().subscribe((characters)=> {
      this.charactersList=characters;
      this.charactersList=this.charactersList.results;
      console.log(this.charactersList);
    })
  }

}
