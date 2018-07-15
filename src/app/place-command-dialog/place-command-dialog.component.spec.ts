import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceCommandDialogComponent } from './place-command-dialog.component';

describe('PlaceCommandDialogComponent', () => {
  let component: PlaceCommandDialogComponent;
  let fixture: ComponentFixture<PlaceCommandDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceCommandDialogComponent ]
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
