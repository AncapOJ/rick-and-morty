import { Component, OnInit } from '@angular/core';
import { LocationsService } from 'src/app/shared/services/locations.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  locationsList:any=[];

  constructor( private locationsService: LocationsService) { }

  ngOnInit(): void {

    this.locationsService.getLocations().subscribe((locations)=>{
      this.locationsList=locations;
      this.locationsList=this.locationsList.results;
      console.log(this.locationsList)
    })
  }

}
