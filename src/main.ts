import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'rxjs/Rx'; // For using methods on observables
import { environment } from './environments/environment';
import {PokesirModule} from "./app/pokesir.module";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(PokesirModule);
