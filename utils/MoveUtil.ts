export default class MoveUtil {

    private static normalSpeed : number = 0.1
    private static sprintSpeed : number = 0.13
    private static sneakSpeed : number = 0.05
    private static sprintSneakSpeed : number = 0.07

    public static getNormalSpeed() : number {
        return MoveUtil.normalSpeed
    }

    public static setNormalSpeed(speed : number) : void {
        MoveUtil.normalSpeed = speed
    }

    public static getSprintSpeed() : number {
        return MoveUtil.sprintSpeed
    }

    public static setSprintSpeed(speed : number) : void {
        MoveUtil.sprintSpeed = speed
    }

    public static getSneakSpeed() : number {
        return MoveUtil.sneakSpeed
    }

    public static setSneakSpeed(speed : number) : void {
        MoveUtil.sneakSpeed = speed
    }

    public static getSprintSneakSpeed() : number {
        return MoveUtil.sprintSneakSpeed
    }

    public static setSprintSneakSpeed(speed : number) : void {
        MoveUtil.sprintSneakSpeed = speed
    }
}