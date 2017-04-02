import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonName'
})
export class PokemonNamePipe implements PipeTransform {

  transform(value:{name: string}[], searchString = ""): Array<any> {
    if (typeof value !== "undefined") {
      return value.filter((e) => e.name.toLowerCase().indexOf(searchString.toLowerCase()) != -1);
    } else {
      return [];
    }
  }

}
