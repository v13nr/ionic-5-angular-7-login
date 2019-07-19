import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoshomePage } from './poshome.page';

describe('PoshomePage', () => {
  let component: PoshomePage;
  let fixture: ComponentFixture<PoshomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoshomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoshomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
