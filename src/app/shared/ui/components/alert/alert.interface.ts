export enum AlertType {
  Success,
  Error,
}

export interface Alert {
  title: string;
  message?: string;
  type: AlertType;
}
