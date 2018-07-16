import { Component, OnInit, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { GlobalService } from '../shared/global.service';
import { RobotService } from '../shared/robot.service';

@Component({
  selector: 'app-table-top',
  templateUrl: './table-top.component.html',
  styleUrls: ['./table-top.component.css']
})
export class TableTopComponent implements AfterViewChecked {

  robotClass: string;

  Arr = Array; // Array type captured in a variable
  rows = Array.from({ length: GlobalService.ROWS }).map((x, i) => (GlobalService.ROWS - 1) - i);
  cols = Array.from({ length: GlobalService.COLS }).map((x, i) => i);

  constructor(
    private robotService: RobotService,
    private cdRef: ChangeDetectorRef
  ) { }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  getRobotDirection(rowNo: number, colNo: number) {
    return this.robotService.getFacingDirection(rowNo, colNo);
  }

}
