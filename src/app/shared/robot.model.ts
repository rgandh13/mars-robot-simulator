import { Directions } from './directions.enum';

export class RobotModel {

    public static robot: RobotModel;

    x = -1;  // x coordinate for robot's position
    y = -1;  // y coordinate for robot's position
    facingDirection: Directions = Directions.NODIRECTION;  // Robot's facing direction
    robotPlaced = false; // Indicates whether the robot is placed or not.

    public static getInstance() {
        // Checks whether the robot has been instantiated. If it has, a stored copy is returned.
        if (!RobotModel.robot) {
            RobotModel.robot = new RobotModel();
        }
        return RobotModel.robot;
    }
}
