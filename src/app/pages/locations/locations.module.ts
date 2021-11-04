import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsRoutingModule } from './locations-routing.module';
import { LocationsComponent } from './locations.component';
import { LocationsGalleryComponent } from './locations-gallery/locations-gallery.component';
import { LocationsDetailsComponent } from './pages/locations-details/locations-details.component';


@NgModule({
  declarations: [
    LocationsComponent,
    LocationsGalleryComponent,
    LocationsDetailsComponent
  ],
  imports: [
    CommonModule,
    LocationsRoutingModule
  ]
})
export class LocationsModule { }
