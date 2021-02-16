import { Component } from '@angular/core';
import { HeaderStateService } from 'src/app/state/header-state.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(public readonly headerState: HeaderStateService) { }

  change() {
    this.headerState.increment();
  }
}
