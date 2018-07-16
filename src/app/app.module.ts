import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

// Angular Material
import { MatDialogModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { TableTopComponent } from './table-top/table-top.component';
import { UserInputComponent } from './user-input/user-input.component';
import { HelpDialogComponent } from './help-dialog/help-dialog.component';
import { ButtonComponent } from './button/button.component';
import { PlaceCommandDialogComponent } from './place-command-dialog/place-command-dialog.component';
import { ShowPositionDialogComponent } from './show-position-dialog/show-position-dialog.component';

// Services
import { GlobalService } from './shared/global.service';
import { RobotService } from './shared/robot.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TableTopComponent,
    UserInputComponent,
    HelpDialogComponent,
    ButtonComponent,
    PlaceCommandDialogComponent,
    ShowPositionDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [
    GlobalService,
    RobotService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    HelpDialogComponent,
    PlaceCommandDialogComponent,
    ShowPositionDialogComponent
  ],
})
export class AppModule { }
