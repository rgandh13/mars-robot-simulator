import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPositionDialogComponent } from './show-position-dialog.component';

describe('ShowPositionDialogComponent', () => {
  let component: ShowPositionDialogComponent;
  let fixture: ComponentFixture<ShowPositionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPositionDialogComponent ]
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
