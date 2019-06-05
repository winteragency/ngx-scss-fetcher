import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScssFetcherService {

  get(parameter: string): string {

    const element = document.createElement('meta');

    element.classList.add(`fetcher-${parameter}`);

    document.head.appendChild(element);

    const value = getComputedStyle(element).fontFamily.replace(/\/|\"/g, '');

    element.parentElement.removeChild(element);

    return value;

  }

}
