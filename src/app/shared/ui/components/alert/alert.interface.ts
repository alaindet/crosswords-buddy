export enum AlertType {
  Success,
  Error,
  Info,
}

export interface Alert {
  title: string;
  message?: string;
  type: AlertType;
}
