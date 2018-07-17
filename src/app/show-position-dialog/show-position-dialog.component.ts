import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { RobotService } from '../shared/robot.service';

@Component({
  selector: 'app-show-position-dialog',
  templateUrl: './show-position-dialog.component.html',
  styleUrls: ['./show-position-dialog.component.css']
})
export class ShowPositionDialogComponent implements OnInit {
  robotPosition: any;

  constructor(
    public robotService: RobotService,
    public dialogRef: MatDialogRef<ShowPositionDialogComponent>) { }

  ngOnInit() {
    // Get the robot position when the user clicks report button.
    this.robotPosition = this.robotService.getRobotPosition();
  }

  close() {
    this.dialogRef.close();
  }
}
