import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GlobalService } from '../shared/global.service';
import { MatDialogRef } from '@angular/material';
import { RobotService } from '../shared/robot.service';
import { Directions } from '../shared/directions.enum';

@Component({
  selector: 'app-place-command-dialog',
  templateUrl: './place-command-dialog.component.html',
  styleUrls: ['./place-command-dialog.component.css']
})
export class PlaceCommandDialogComponent {

  x: string;
  y: string;
  facingDirection: Directions;
  directions = GlobalService.DIRECTIONS;
  showError = false;

  constructor(
    public dialogRef: MatDialogRef<PlaceCommandDialogComponent>,
    public robotService: RobotService) { }

  onSave() {
    const xCoordinate = parseInt(this.x, 0);
    const yCoordinate = parseInt(this.y, 0);

    // If the inputs are valid, set the robot position accordingly and close the dialog.
    if (this.robotService.isInputValid(xCoordinate, yCoordinate)) {
      this.robotService.setRobotProperties({
        xCoordinate: xCoordinate,
        yCoordinate: yCoordinate,
        facingDirection: this.facingDirection
      });
      this.dialogRef.close(true);
    } else {
      // Show validation error on dialog if inputs are not correct.
      this.showError = true;
    }
  }

  onCancel() {
    // Close the dialog but do not execute any command.
    this.dialogRef.close(false);
  }
}
