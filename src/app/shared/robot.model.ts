import { Directions } from './directions.enum';

export class RobotModel {

    public static robot: RobotModel;

    x = -1;
    y = -1;
    facingDirection: Directions = Directions.NODIRECTION;
    robotPlaced = false;

    public static getInstance() {
        if (!RobotModel.robot) {
            RobotModel.robot = new RobotModel();
        }
        return RobotModel.robot;
    }

    /*  constructor(init?: RobotModel) {
         if (init) {
             Object.assign(this, init);
         }
     } */

}
