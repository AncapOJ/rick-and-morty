import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesRoutingModule } from './episodes-routing.module';
import { EpisodesComponent } from './episodes.component';
import { EpisodesGalleryComponent } from './episodes-gallery/episodes-gallery.component';
import { EpisodesDetailsComponent } from './pages/episodes-details/episodes-details.component';



@NgModule({
  declarations: [
    EpisodesComponent,
    EpisodesGalleryComponent,
    EpisodesDetailsComponent
    
  ],
  imports: [
    CommonModule,
    EpisodesRoutingModule,
     ]
})
export class EpisodesModule { }
