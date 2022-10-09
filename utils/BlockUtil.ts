export default class Liquid {

    constructor(
        private readonly liquidType : number
    ) {}

    public static WATER : number = 8
    public static LAVA : number = 10
    public static STATIONARY_WATER : number = 9
    public static STATIONARY_LAVA : number = 11

    isInLiquid() : boolean {
        return this.liquidType == Liquid.WATER || this.liquidType == Liquid.LAVA || this.liquidType == Liquid.STATIONARY_WATER || this.liquidType == Liquid.STATIONARY_LAVA
    }

    isLiquid() : boolean {
        return this.liquidType == Liquid.WATER || this.liquidType == Liquid.LAVA
    }

    isStationaryLiquid() : boolean {
        return this.liquidType == Liquid.STATIONARY_WATER || this.liquidType == Liquid.STATIONARY_LAVA
    }

    isWater() : boolean {
        return this.liquidType == Liquid.WATER || this.liquidType == Liquid.STATIONARY_WATER
    }

    isLava() : boolean {
        return this.liquidType == Liquid.LAVA || this.liquidType == Liquid.STATIONARY_LAVA
    }
}