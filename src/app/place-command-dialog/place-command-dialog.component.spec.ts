import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceCommandDialogComponent } from './place-command-dialog.component';
import { ButtonComponent } from '../button/button.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatSelectModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogRef } from '@angular/material';
import { GlobalService } from '../shared/global.service';
import { RobotService } from '../shared/robot.service';

describe('PlaceCommandDialogComponent', () => {
  let component: PlaceCommandDialogComponent;
  let fixture: ComponentFixture<PlaceCommandDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlaceCommandDialogComponent, ButtonComponent],
      imports: [
        FormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      providers: [
        GlobalService,
        RobotService,
        { provide: MatDialogRef, useValue: {} }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceCommandDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
