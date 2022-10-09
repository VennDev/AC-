import Location from "../utils/Location"

export default class PlayerData {

    private static userName : string = ""
    private static hasJoined : boolean = false
    private static onGround : boolean = false
    private static onLiquid : boolean = false
    private static onIce : boolean = false
    private static onSlime : boolean = false
    private static onClimbable : boolean = false
    private static onWeb : boolean = false
    private static onLadder : boolean = false
    private static onElastomers : boolean = false
    private static onVehicle : boolean = false
    private static isSleeping : boolean = false
    private static isSneaking : boolean = false
    private static isSprinting : boolean = false
    private static isSwimming : boolean = false
    private static isPlacing : boolean = false
    private static isBreaking : boolean = false
    private static openWindow : boolean = false
    private static pingTicks : number = 0
    private static ping : number = 0
    private static pingAverage : number = 0
    private static pingAverageTicks : number = 0
    private static joinTicks : number = 0
    private static teleportTicks : number = 0
    private static deltaX : number = 0
    private static deltaY : number = 0
    private static deltaZ : number = 0
    private static lastDeltaX : number = 0
    private static lastDeltaY : number = 0
    private static lastDeltaZ : number = 0
    private static deltaYaw : number = 0
    private static lastDeltaYaw : number = 0
    private static deltaPitch : number = 0
    private static lastDeltaPitch : number = 0
    private static deltaXZ : number = 0
    private static lastDeltaXZ : number = 0
    private static deathTicks : number = 0
    private static respawnTicks : number = 0
    private static velocityTicks : number = 0
    private static verticalVelocityTicks : number = 0
    private static horizontalVelocityTicks : number = 0
    private static horizontalSpeedTicks : number = 0
    private static velocityX : number = 0
    private static velocityY : number = 0
    private static velocityZ : number = 0
    private static lastVelocityX : number = 0
    private static lastVelocityY : number = 0
    private static lastVelocityZ : number = 0
    private static attackTicks : number = 0
    private static underAttackTicks : number = 0
    private static placeBlockTicks : number = 0
    private static breakBlockTicks : number = 0
    private static elastomersTicks : number = 0
    private static iceTicks : number = 0
    private static slimeTicks : number = 0
    private static climableTicks : number = 0
    private static liquidTicks : number = 0
    private static gameMode : number = 0
    private static location : Location = new Location(0, 0, 0, 0, 0, false)
    private static lastLocation : Location = new Location(0, 0, 0, 0, 0, false)
    private static lastLastLocation : Location = new Location(0, 0, 0, 0, 0, false)

    public static getUserName() : string {
        return this.userName
    }

    public static setUserName(userName : string) : void {
        this.userName = userName
    }

    public static getHasJoined() : boolean {
        return this.hasJoined
    }

    public static setHasJoined(hasJoined : boolean) : void {
        this.hasJoined = hasJoined
    }

    public static getOnGround() : boolean {
        return this.onGround
    }

    public static setOnGround(onGround : boolean) : void {
        this.onGround = onGround
    }

    public static getOnLiquid() : boolean {
        return this.onLiquid
    }

    public static setOnLiquid(onLiquid : boolean) : void {
        this.onLiquid = onLiquid
    }

    public static getOnIce() : boolean {
        return this.onIce
    }

    public static setOnIce(onIce : boolean) : void {
        this.onIce = onIce
    }

    public static getOnSlime() : boolean {
        return this.onSlime
    }

    public static setOnSlime(onSlime : boolean) : void {
        this.onSlime = onSlime
    }

    public static getOnClimbable() : boolean {
        return this.onClimbable
    }

    public static setOnClimbable(onClimbable : boolean) : void {
        this.onClimbable = onClimbable
    }

    public static getOnWeb() : boolean {
        return this.onWeb
    }

    public static setOnWeb(onWeb : boolean) : void {
        this.onWeb = onWeb
    }

    public static getOnLadder() : boolean {
        return this.onLadder
    }

    public static setOnLadder(onLadder : boolean) : void {
        this.onLadder = onLadder
    }

    public static getOnElastomers() : boolean {
        return this.onElastomers
    }

    public static setOnElastomers(onElastomers : boolean) : void {
        this.onElastomers = onElastomers
    }

    public static getOnVehicle() : boolean {
        return this.onVehicle
    }

    public static setOnVehicle(onVehicle : boolean) : void {
        this.onVehicle = onVehicle
    }

    public static getIsSleeping() : boolean {
        return this.isSleeping
    }

    public static setIsSleeping(isSleeping : boolean) : void {
        this.isSleeping = isSleeping
    }

    public static getIsSneaking() : boolean {
        return this.isSneaking
    }

    public static setIsSneaking(isSneaking : boolean) : void {
        this.isSneaking = isSneaking
    }

    public static getIsSprinting() : boolean {
        return this.isSprinting
    }

    public static setIsSprinting(isSprinting : boolean) : void {
        this.isSprinting = isSprinting
    }

    public static getIsSwimming() : boolean {
        return this.isSwimming
    }

    public static setIsSwimming(isSwimming : boolean) : void {
        this.isSwimming = isSwimming
    }

    public static getIsPlacing() : boolean {
        return this.isPlacing
    }

    public static setIsPlacing(isPlacing : boolean) : void {
        this.isPlacing = isPlacing
    }

    public static getIsBreaking() : boolean {
        return this.isBreaking
    }

    public static setIsBreaking(isBreaking : boolean) : void {
        this.isBreaking = isBreaking
    }

    public static getOpenWindow() : boolean {
        return this.openWindow
    }

    public static setOpenWindow(openWindow : boolean) : void {
        this.openWindow = openWindow
    }

    public static getPingTicks() : number {
        return this.pingTicks
    }

    public static setPingTicks(pingTicks : number) : void {
        this.pingTicks = pingTicks
    }

    public static getDeltaX() : number {
        return this.deltaX
    }
}