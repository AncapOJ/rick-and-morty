import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { CharactersDetailsComponent } from './pages/characters-details/characters-details.component';


@NgModule({
  declarations: [
    CharactersComponent,
    CharactersDetailsComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule
  ]
})
export class CharactersModule { }
