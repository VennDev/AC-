export default class Location {

    private static x : number = 0
    private static y : number = 0
    private static z : number = 0
    private static yaw : number = 0
    private static pitch : number = 0
    private static onGround : boolean = false

    public constructor(
        x : number,
        y : number, 
        z : number, 
        yaw : number, 
        pitch : number, 
        onGround : boolean
    ) {
        Location.x = x
        Location.y = y
        Location.z = z
        Location.yaw = yaw
        Location.pitch = pitch
        Location.onGround = onGround
    }

    public static getX() : number {
        return this.x
    }

    public static getY() : number {
        return this.y
    }

    public static getZ() : number {
        return this.z
    }

    public static getYaw() : number {
        return this.yaw
    }

    public static getPitch() : number {
        return this.pitch
    }

    public static getOnGround() : boolean {
        return this.onGround
    }

    public static setX(x : number) : void {
        this.x = x
    }

    public static setY(y : number) : void {
        this.y = y
    }

    public static setZ(z : number) : void {
        this.z = z
    }

    public static setYaw(yaw : number) : void {
        this.yaw = yaw
    }

    public static setPitch(pitch : number) : void {
        this.pitch = pitch
    }

    public static setOnGround(onGround : boolean) : void {
        this.onGround = onGround
    }
}