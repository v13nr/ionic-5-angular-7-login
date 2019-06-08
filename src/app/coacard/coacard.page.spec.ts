import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoacardPage } from './coacard.page';

describe('CoacardPage', () => {
  let component: CoacardPage;
  let fixture: ComponentFixture<CoacardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoacardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoacardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
