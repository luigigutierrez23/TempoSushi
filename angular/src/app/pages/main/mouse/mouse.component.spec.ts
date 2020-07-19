/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MouseComponent } from './mouse.component';

describe('MouseComponent', () => {
  let component: MouseComponent;
  let fixture: ComponentFixture<MouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
