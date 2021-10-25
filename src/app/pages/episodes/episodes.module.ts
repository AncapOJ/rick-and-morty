import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesRoutingModule } from './episodes-routing.module';
import { EpisodesComponent } from './episodes.component';
import { EpisodesGalleryComponent } from './episodes-gallery/episodes-gallery.component';


@NgModule({
  declarations: [
    EpisodesComponent,
    EpisodesGalleryComponent
  ],
  imports: [
    CommonModule,
    EpisodesRoutingModule
  ]
})
export class EpisodesModule { }
