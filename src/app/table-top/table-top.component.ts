import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-top',
  templateUrl: './table-top.component.html',
  styleUrls: ['./table-top.component.css']
})
export class TableTopComponent implements OnInit {

  constructor() { }

  cols = 5;
  rows = 5;
  Arr = Array; // Array type captured in a variable

  ngOnInit() {
  }

}
