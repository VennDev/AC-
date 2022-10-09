import Check from "../checks/Check"
import Speed from "../checks/movement/Speed"

export default class LoadCheck {

    public checks : Array<Check> = new Array<Check>()

    public registerCheck() : void {
        this.checks.push(new Speed())
    }

    public getActiveChecks() : Array<Check> {
        return this.checks
    }
}