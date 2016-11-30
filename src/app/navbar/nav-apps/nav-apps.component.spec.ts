/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NavAppsComponent } from './nav-apps.component';

describe('NavAppsComponent', () => {
  let component: NavAppsComponent;
  let fixture: ComponentFixture<NavAppsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavAppsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
