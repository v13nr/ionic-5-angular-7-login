import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabwelcomePage } from './tabwelcome.page';

describe('TabwelcomePage', () => {
  let component: TabwelcomePage;
  let fixture: ComponentFixture<TabwelcomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabwelcomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabwelcomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
