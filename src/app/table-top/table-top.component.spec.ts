import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTopComponent } from './table-top.component';
import { GlobalService } from '../shared/global.service';
import { RobotService } from '../shared/robot.service';

describe('TabletopComponent', () => {
  let component: TableTopComponent;
  let fixture: ComponentFixture<TableTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableTopComponent],
      providers: [
        GlobalService,
        RobotService,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should exist', () => {
    expect(component).toBeDefined();
  });
});
