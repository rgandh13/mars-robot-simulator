import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HelpDialogComponent } from '../help-dialog/help-dialog.component';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {

  constructor(public dialog: MatDialog) { }

  showHelp() {
    const dialogRef = this.dialog.open(HelpDialogComponent, { width: '250px' });
    console.log('text');

    /*   const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
        width: '250px',
        data: {name: this.name, animal: this.animal}
      }); */
  }
}
