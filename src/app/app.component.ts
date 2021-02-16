import { Component } from '@angular/core';
import { HeaderStateService } from './state/header-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public readonly headerState: HeaderStateService){}
}
