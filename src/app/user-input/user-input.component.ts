import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HelpDialogComponent } from '../help-dialog/help-dialog.component';
import { PlaceCommandDialogComponent } from '../place-command-dialog/place-command-dialog.component';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {

  constructor(public dialog: MatDialog) { }

  showHelp() {
    this.dialog.open(HelpDialogComponent);
  }

  openPlaceDialog() {
    this.dialog.open(PlaceCommandDialogComponent);
  }

  onMove() {
    console.log('move');
  }

  onRotate(direction: string) {
    console.log(direction);
  }

  onReport() {
    console.log('report');
  }

  closeDialog() {

  }
}
