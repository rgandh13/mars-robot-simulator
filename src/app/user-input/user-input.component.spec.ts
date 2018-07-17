import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInputComponent } from './user-input.component';
import { ButtonComponent } from '../button/button.component';
import { MatDialog } from '@angular/material';
import { RobotService } from '../shared/robot.service';

describe('UserInputComponent', () => {
  let component: UserInputComponent;
  let fixture: ComponentFixture<UserInputComponent>;
  let dialogSpy: jasmine.SpyObj<MatDialog>;


  beforeEach(async(() => {
    const dialogSpysource = jasmine.createSpyObj('dialog', ['open']);

    TestBed.configureTestingModule({
      declarations: [UserInputComponent, ButtonComponent],
      providers: [
        RobotService,
        { provide: MatDialog, useValue: dialogSpysource }
      ],
    })
      .compileComponents();

    dialogSpy = TestBed.get(MatDialog);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should exist', () => {
    expect(component).toBeDefined();
  });

  it('should show help dialog', () => {
    component.showHelp();
    expect(dialogSpy.open).toHaveBeenCalledTimes(1);
  });
});
