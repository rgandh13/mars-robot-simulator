import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GlobalService } from '../shared/global.service';
import { Directions } from '../shared/directions.enum';
import { MatDialogRef } from '@angular/material';
import { RobotModel } from '../shared/robot.model';

@Component({
  selector: 'app-place-command-dialog',
  templateUrl: './place-command-dialog.component.html',
  styleUrls: ['./place-command-dialog.component.css']
})
export class PlaceCommandDialogComponent {

  constructor(public dialogRef: MatDialogRef<PlaceCommandDialogComponent>) {
    this.robot = RobotModel.getInstance();
  }

  // @Output() savePlaceInputs = new EventEmitter();

  directions = GlobalService.DIRECTIONS;
  robot: RobotModel;
  x: string;
  y: string;
  facingDirection: Directions;

  isInputValid(x: number, y: number) {
    return (x >= 0 && x < GlobalService.ROWS) && (y >= 0 && y < GlobalService.COLS);
  }

  onSave() {
    const xCoordinate = parseInt(this.x, 0);
    const yCoordinate = parseInt(this.y, 0);

    if (this.isInputValid(xCoordinate, yCoordinate)) {
      this.robot.x = xCoordinate;
      this.robot.y = yCoordinate;
      this.robot.facingDirection = this.facingDirection;
    }
    this.dialogRef.close();
    // this.savePlaceInputs.emit();
  }
}
