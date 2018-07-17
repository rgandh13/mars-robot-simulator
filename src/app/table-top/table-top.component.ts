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
  facingDirection: string;

  // Create an array for rows and cols from the globals
  // For rows, array will be in descending order whereas cols will be in ascending order as (0,0) is south-west most corner.
  rows = Array.from({ length: GlobalService.ROWS }).map((x, index) => index).reverse();
  cols = Array.from({ length: GlobalService.COLS }).map((y, index) => index);

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
