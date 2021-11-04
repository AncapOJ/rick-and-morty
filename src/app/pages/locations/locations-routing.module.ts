import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationsComponent } from './locations.component';
import { LocationsDetailsComponent } from './pages/locations-details/locations-details.component';

const routes: Routes = [
  {path:'' ,component:LocationsComponent},
  {path:':idLocation', component: LocationsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationsRoutingModule { }
