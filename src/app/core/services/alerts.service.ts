import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Alert, AlertType } from 'src/app/shared/ui/components/alert/alert.interface';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  private alert$ = new BehaviorSubject<Alert | null>(null);

  get alert() {
    return this.alert$.asObservable();
  }

  setInfoAlert(title: string, message?: string) {
    this.alert$.next({
      title: title,
      message: message ?? null,
      type: AlertType.Info,
    });
  }

  setSuccessAlert(title: string, message?: string) {
    this.alert$.next({
      title: title,
      message: message ?? null,
      type: AlertType.Success,
    });
  }

  setErrorAlert(title: string, message?: string) {
    this.alert$.next({
      title: title,
      message: message ?? null,
      type: AlertType.Error,
    });
  }

  clearAlert() {
    this.alert$.next(null);
  }
}
