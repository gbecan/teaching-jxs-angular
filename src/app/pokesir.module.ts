import { NgModule } from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import { PokemonNamePipe } from './pokemon-name.pipe';
import {PokedexComponent} from "./pokedex/pokedex.component";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  declarations: [PokedexComponent, PokemonNamePipe],
  providers: [],
  bootstrap: [PokedexComponent]
})
export class PokesirModule { }
