import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-help-dialog',
  templateUrl: './help-dialog.component.html',
  styleUrls: ['./help-dialog.component.css']
})
export class HelpDialogComponent {

  constructor(public dialogRef: MatDialogRef<HelpDialogComponent>) { }

  close() {
    this.dialogRef.close();
  }
}
