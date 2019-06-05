import { Component } from '@angular/core';
import { ScssFetcherService } from 'ngx-scss-fetcher';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  value = this.fetcher.get('testColor');

  constructor(private fetcher: ScssFetcherService) {}

}
