import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCharactersComponent } from './all-characters/all-characters.component';
import { AllLocationsComponent } from './all-locations/all-locations.component';
import { AllEpisodesComponent } from './all-episodes/all-episodes.component';



@NgModule({
  declarations: [AllCharactersComponent, AllLocationsComponent,AllEpisodesComponent],
  
  
  imports: [
    CommonModule
  ],
  exports: [AllCharactersComponent, AllLocationsComponent,AllEpisodesComponent]
})



export class SharedComponentsModule { }
