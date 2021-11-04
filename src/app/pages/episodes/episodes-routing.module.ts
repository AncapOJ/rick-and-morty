import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodesComponent } from './episodes.component';
import { EpisodesDetailsComponent } from './pages/episodes-details/episodes-details.component';

const routes: Routes = [
  {path:'',component: EpisodesComponent},
  {path:':idEpisode', component: EpisodesDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodesRoutingModule { } 
