import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderUserInfoInputComponent } from './header-user-info-input.component';

describe('HeaderUserInfoInputComponent', () => {
  let component: HeaderUserInfoInputComponent;
  let fixture: ComponentFixture<HeaderUserInfoInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderUserInfoInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderUserInfoInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
