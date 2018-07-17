import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPositionDialogComponent } from './show-position-dialog.component';
import { ButtonComponent } from '../button/button.component';
import { GlobalService } from '../shared/global.service';
import { RobotService } from '../shared/robot.service';
import { MatDialogRef } from '@angular/material';

describe('ShowPositionDialogComponent', () => {
  let component: ShowPositionDialogComponent;
  let fixture: ComponentFixture<ShowPositionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShowPositionDialogComponent, ButtonComponent],
      providers: [
        GlobalService,
        RobotService,
        { provide: MatDialogRef, useValue: {} }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPositionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
