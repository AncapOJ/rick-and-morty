import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/shared/services/characters.service';
import { LocationsService } from 'src/app/shared/services/locations.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  locationsList:any=[]; 
  aux:any;
  residents:any=[];
  residentsList:any=[];
  page:string='1';
  pages=[1,2,3,4,5,6];

  constructor(private charactersService: CharactersService, private locationsService: LocationsService) { }

  ngOnInit(): void {

    this.locationsService.getLocations(this.page).subscribe((locations)=>{
      this.locationsList=locations;
      this.locationsList=this.locationsList.results;
      console.log(this.locationsList)

    // let esther = async() =>{
    //   for (let item of this.locationsList){
    //     for(let i of item.residents){
    //       await this.charactersService.getCharacterByURL(i).subscribe(character => {
    //         this.aux=character;
    //         this.residents.push(this.aux.name);
    //       });
    //     }
    //   }
    //   console.log(this.residents);
    // }
      

      // for (let item of this.locationsList){
      //   console.log('Dentro del bucle')
      //   this.residents=[];
      //   for(let i of item.residents){
      
      //     this.charactersService.getCharacterByURL(i).subscribe(character => {
      //       this.aux=character;
      //       this.residents.push(this.aux.name);
      //       console.log(this.residents);
      //     });
      //   this.residentsList.push(this.residents);
      //   }
      // }
      // console.log(this.residentsList);
     });

    
  }

  changePage(evento:any) {
    this.page = evento.path[0].innerText;
    this.ngOnInit();
  }

}
