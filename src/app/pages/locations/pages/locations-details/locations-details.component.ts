import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/shared/services/characters.service';
import { LocationsService } from 'src/app/shared/services/locations.service';

@Component({
  selector: 'app-locations-details',
  templateUrl: './locations-details.component.html',
  styleUrls: ['./locations-details.component.scss']
})
export class LocationsDetailsComponent implements OnInit {

  location:any;
  characters:any=[];

  constructor(private locationsService:LocationsService, private route: ActivatedRoute, private charactersService : CharactersService ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params=> {
      const id:any= params.get("idLocation");
      this.locationsService.getLocation(id).subscribe(location => {
        this.location =location;
  
        for( let item of this.location.residents){
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
 