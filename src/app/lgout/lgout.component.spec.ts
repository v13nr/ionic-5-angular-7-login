import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LgoutComponent } from './lgout.component';

describe('LgoutComponent', () => {
  let component: LgoutComponent;
  let fixture: ComponentFixture<LgoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LgoutComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
