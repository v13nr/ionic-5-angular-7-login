import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarangPage } from './barang.page';

describe('BarangPage', () => {
  let component: BarangPage;
  let fixture: ComponentFixture<BarangPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarangPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
