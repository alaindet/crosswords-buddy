import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  debounce(fn: Function, delay: number): () => void {

    let timeout;

    return function () {
      const functionCall = () => fn.apply(this, arguments);
      clearTimeout(timeout);
      timeout = setTimeout(functionCall, delay);
    }
  }

  capitalize(input: string): string {
    const pattern = /(?: |\-|^)([a-zA-Z])/g;
    return input.replace(pattern, match => match.toUpperCase());
  }
}
