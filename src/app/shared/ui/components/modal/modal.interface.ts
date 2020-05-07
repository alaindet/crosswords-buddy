import { TemplateRef } from '@angular/core';

export interface ModalConfig {
  show: boolean;
  title?: string;
  message?: string;
  confirm?: string;
  template?: TemplateRef<any>;
  context?: {
    [contextKey: string]: any
  };
}
