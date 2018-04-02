import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { PokesirComponent } from './pokesir.component';
import {PokemonNamePipe} from "./pipes/pokemon-name/pokemon-name.pipe";


@NgModule({
  declarations: [
    PokesirComponent,
    PokemonNamePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [PokesirComponent]
})
export class PokesirModule { }
