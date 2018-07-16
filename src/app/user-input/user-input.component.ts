import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HelpDialogComponent } from '../help-dialog/help-dialog.component';
import { PlaceCommandDialogComponent } from '../place-command-dialog/place-command-dialog.component';
import { RobotService } from '../shared/robot.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {

  moveDisabled = true;

  constructor(
    public dialog: MatDialog,
    public robotService: RobotService) {
  }

  showHelp() {
    this.dialog.open(HelpDialogComponent);
  }

  openPlaceDialog() {
    this.dialog.open(PlaceCommandDialogComponent)
      .afterClosed().subscribe((result) => {
        if (result) {
          this.moveDisabled = this.robotService.isMoveDisabled();
        }
      });
  }

  onMove() {
    this.robotService.moveRobot();
    this.moveDisabled = this.robotService.isMoveDisabled();
  }

  onRotate(direction: string) {
    this.robotService.rotateRobot(direction);
    this.moveDisabled = this.robotService.isMoveDisabled();
  }

  onReport() {
    console.log('report');
  }

  closeDialog() {

  }
}
