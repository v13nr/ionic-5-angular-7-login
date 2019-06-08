import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoaPage } from './coa.page';

describe('CoaPage', () => {
  let component: CoaPage;
  let fixture: ComponentFixture<CoaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
