import { Injectable } from '@angular/core';

import { RobotModel } from '../shared/robot.model';
import { GlobalService } from './global.service';
import { Directions } from './directions.enum';

@Injectable()
export class RobotService {
  robot: RobotModel;

  constructor() {
    this.robot = RobotModel.getInstance();
  }

  isInputValid(x: number, y: number) {
    return (x >= 0 && x < GlobalService.ROWS) && (y >= 0 && y < GlobalService.COLS);
  }

  setRobotProperties(properties) {
    this.robot.x = properties.xCoordinate;
    this.robot.y = properties.yCoordinate;
    this.robot.facingDirection = properties.facingDirection;
    this.robot.robotPlaced = true;
  }

  rotateRobot(direction: string) {
    switch (this.robot.facingDirection) {
      case Directions.NORTH:
        this.robot.facingDirection = direction === GlobalService.LEFT ? Directions.WEST : Directions.EAST;
        break;
      case Directions.SOUTH:
        this.robot.facingDirection = direction === GlobalService.LEFT ? Directions.EAST : Directions.WEST;
        break;
      case Directions.EAST:
        this.robot.facingDirection = direction === GlobalService.LEFT ? Directions.NORTH : Directions.SOUTH;
        break;
      case Directions.WEST:
        this.robot.facingDirection = direction === GlobalService.LEFT ? Directions.SOUTH : Directions.NORTH;
        break;
      default:
        break;
    }
  }

  moveRobot() {
    switch (this.robot.facingDirection) {
      case Directions.NORTH:
        if (this.isInputValid(this.robot.x + 1, this.robot.y)) {
          this.robot.x++;
        }
        break;
      case Directions.SOUTH:
        if (this.isInputValid(this.robot.x - 1, this.robot.y)) {
          this.robot.x--;
        }
        break;
      case Directions.EAST:
        if (this.isInputValid(this.robot.x, this.robot.y + 1)) {
          this.robot.y++;
        }
        break;
      case Directions.WEST:
        if (this.isInputValid(this.robot.x, this.robot.y - 1)) {
          this.robot.y--;
        }
        break;
      default:
        break;
    }
  }

  isMoveDisabled(): boolean {
    let moveDisabled = true;

    switch (this.robot.facingDirection) {
      case Directions.NORTH:
        if (this.isInputValid(this.robot.x + 1, this.robot.y)) {
          moveDisabled = false;
        }
        break;
      case Directions.SOUTH:
        if (this.isInputValid(this.robot.x - 1, this.robot.y)) {
          moveDisabled = false;
        }
        break;
      case Directions.EAST:
        if (this.isInputValid(this.robot.x, this.robot.y + 1)) {
          moveDisabled = false;
        }
        break;
      case Directions.WEST:
        if (this.isInputValid(this.robot.x, this.robot.y - 1)) {
          moveDisabled = false;
        }
        break;
      default:
        break;
    }

    return moveDisabled;
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

  getRobotPosition() {
    return { X: this.robot.x, Y: this.robot.y, FacingDirection: this.robot.facingDirection };
  }

}
