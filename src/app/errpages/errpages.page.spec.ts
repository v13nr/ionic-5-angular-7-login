import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrpagesPage } from './errpages.page';

describe('ErrpagesPage', () => {
  let component: ErrpagesPage;
  let fixture: ComponentFixture<ErrpagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrpagesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrpagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
