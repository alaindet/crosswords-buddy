import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Alert, AlertType } from 'src/app/shared/ui/components/alert/alert.interface';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  private DELAY = 3000;
  private timeout: any;
  private alert$ = new BehaviorSubject<Alert | null>(null);

  get alert() {
    return this.alert$.asObservable();
  }

  setInfoAlert(title: string, message?: string) {
    this.setAlert(title, message ?? null, AlertType.Info);
  }

  setSuccessAlert(title: string, message?: string) {
    this.setAlert(title, message ?? null, AlertType.Success);
  }

  setErrorAlert(title: string, message?: string) {
    this.setAlert(title, message ?? null, AlertType.Error);
  }

  clearAlert() {
    this.alert$.next(null);
  }

  setTimeout() {
    this.timeout = setTimeout(() => this.clearAlert(), this.DELAY);
  }

  clearTimeout() {
    clearTimeout(this.timeout);
  }

  private setAlert(title: string, message: string | null, type: AlertType) {
    this.alert$.next({ title, message, type });
    this.setTimeout();
  }
}
