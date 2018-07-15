import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  // Label to show on button
  @Input() label: string;

  // Indicates if the button is disabled.
  @Input() isDisabled = false;

  constructor() { }

}
