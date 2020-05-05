import { DefinitionsService } from 'src/app/core/services/definitions.service';
import { Injectable } from '@angular/core';

import { State } from 'src/app/core/models/state.interface';
import { Direction } from 'src/app/core/models/direction.enum';
import { DefinitionsMap } from 'src/app/core/models/definitions-map.interface';
import { SolvedDefinitionsMap } from 'src/app/core/models/solved-definitions-map.interface';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  APP_NAME = 'CrossWordsBuddy';

  constructor(
    private definitions: DefinitionsService,
  ) {}

  store() {
    console.log('store');
  }

  fetch() {
    const state = window.localStorage.getItem(this.APP_NAME);
    console.log('fetch', state);
  }
}
