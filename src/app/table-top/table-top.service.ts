import { Injectable } from '@angular/core';
import { RobotModel } from '../shared/robot.model';
import { Directions } from '../shared/directions.enum';

@Injectable()
export class TableTopService {

  robot: RobotModel;

  constructor() {
    this.robot = RobotModel.getInstance();
  }

  getFacingDirection(rowNo: number, colNo: number): string {
    let facingDirection = '';
    if (this.robot.x === rowNo && this.robot.y === colNo) {
      switch (this.robot.facingDirection) {
        case Directions.NORTH:
          facingDirection = 'fa-caret-up';
          break;
        case Directions.EAST:
          facingDirection = 'fa-caret-right';
          break;
        case Directions.SOUTH:
          facingDirection = 'fa-caret-down';
          break;
        case Directions.WEST:
          facingDirection = 'fa-caret-left';
          break;
        default:
          facingDirection = '';
      }
    }
    return facingDirection;
  }
}
