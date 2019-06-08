import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmenuPage } from './listmenu.page';

describe('ListmenuPage', () => {
  let component: ListmenuPage;
  let fixture: ComponentFixture<ListmenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListmenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListmenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
