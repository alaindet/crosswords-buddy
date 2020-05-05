import { Injectable } from '@angular/core';

import { CluesService } from 'src/app/core/services/clues.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  APP_NAME = 'CrossWordsBuddy';

  constructor(
    private cluesService: CluesService,
  ) {}

  store() {
    console.log('store');
  }

  fetch() {
    const state = window.localStorage.getItem(this.APP_NAME);
    console.log('fetch', state);
  }
}
