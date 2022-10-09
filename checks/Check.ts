export default class Check {

    private static type : string
    private static subType : string
    private static version : string
    private static maxViolation : number
    private static minViolation : number

    public constructor(
        type : string,
        subType : string,
        version : string,
        maxViolation : number,
        minViolation : number
    ) {
        Check.type = type
        Check.subType = subType
        Check.version = version
        Check.maxViolation = maxViolation
        Check.minViolation = minViolation
    }

    public getType() : string {
        return Check.type
    }

    public getSubType() : string {
        return Check.subType
    }

    public getVersion() : string {
        return Check.version
    }

    public getMaxViolation() : number {
        return Check.maxViolation
    }

    public getMinViolation() : number {
        return Check.minViolation
    }
}