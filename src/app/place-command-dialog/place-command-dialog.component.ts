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

  directions = GlobalService.DIRECTIONS;
  x: string;
  y: string;
  facingDirection: Directions;

  constructor(
    public dialogRef: MatDialogRef<PlaceCommandDialogComponent>,
    public robotService: RobotService) { }

  onSave() {
    const xCoordinate = parseInt(this.x, 0);
    const yCoordinate = parseInt(this.y, 0);

    if (this.robotService.isInputValid(xCoordinate, yCoordinate)) {
      this.robotService.setRobotProperties({
        xCoordinate: xCoordinate,
        yCoordinate: yCoordinate,
        facingDirection: this.facingDirection
      });
      this.dialogRef.close(true);
    } else {
      // show validation error on dialog
    }
  }

  onCancel() {
    this.dialogRef.close(false);
  }
}
