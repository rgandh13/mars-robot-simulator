import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { UserInputComponent } from './user-input/user-input.component';
import { TableTopComponent } from './table-top/table-top.component';
import { ButtonComponent } from './button/button.component';
import { GlobalService } from './shared/global.service';
import { RobotService } from './shared/robot.service';
import { MatDialog } from '@angular/material';
import { MatDialogModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, MainComponent, UserInputComponent, TableTopComponent, ButtonComponent
      ],
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
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
});

/*
it('should render title in a h1 tag', async(() => {
  const fixture = TestBed.createComponent(AppComponent);
  fixture.detectChanges();
  const compiled = fixture.debugElement.nativeElement;
  expect(compiled.querySelector('h1').textContent).toContain('Welcome to my-app!');
})); */
