import { Injectable } from '@angular/core';
import { Directions } from './directions.enum';

export interface FaceDirections {
  value: number;
  viewValue: string;
}

@Injectable()
export class GlobalService {

  public static get ROWS(): number { return 5; }
  public static get COLS(): number { return 5; }

  public static get DIRECTIONS(): FaceDirections[] {
    return [
      { value: Directions.NORTH, viewValue: 'NORTH' },
      { value: Directions.EAST, viewValue: 'EAST' },
      { value: Directions.SOUTH, viewValue: 'SOUTH' },
      { value: Directions.WEST, viewValue: 'WEST' }
    ];
  }

  constructor() { }
}


