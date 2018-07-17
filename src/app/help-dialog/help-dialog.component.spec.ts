import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpDialogComponent } from './help-dialog.component';
import { ButtonComponent } from '../button/button.component';
import { MatDialogRef } from '@angular/material';

describe('HelpDialogComponent', () => {
  let component: HelpDialogComponent;
  let fixture: ComponentFixture<HelpDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HelpDialogComponent, ButtonComponent],
      providers: [{ provide: MatDialogRef, useValue: {} }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
