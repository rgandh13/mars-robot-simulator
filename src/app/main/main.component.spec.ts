import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { TableTopComponent } from '../table-top/table-top.component';
import { UserInputComponent } from '../user-input/user-input.component';
import { ButtonComponent } from '../button/button.component';
import { GlobalService } from '../shared/global.service';
import { RobotService } from '../shared/robot.service';
import { MatDialog, MatDialogModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainComponent, TableTopComponent, UserInputComponent, ButtonComponent],
      imports: [
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule
      ],
      providers: [
        GlobalService,
        RobotService,
        MatDialog
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Mars Robot Simulator');
  }));
});
