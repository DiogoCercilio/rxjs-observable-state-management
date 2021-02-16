import { Component, OnInit } from '@angular/core';
import { HeaderStateService } from 'src/app/state/header-state.service';

@Component({
  selector: 'app-header-user-info-input',
  templateUrl: './header-user-info-input.component.html',
  styleUrls: ['./header-user-info-input.component.scss']
})
export class HeaderUserInfoInputComponent implements OnInit {

  constructor(
    public headerState: HeaderStateService
  ) { }

  ngOnInit() {
  }

  change() {
    this.headerState.increment();
  }
}
