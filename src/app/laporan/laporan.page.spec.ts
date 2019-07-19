import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaporanPage } from './laporan.page';

describe('LaporanPage', () => {
  let component: LaporanPage;
  let fixture: ComponentFixture<LaporanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaporanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaporanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
