import Load from "./Load"
import LoadCheck from "./LoadCheck"
import PlayerData from "../data/PlayerData"
import ACPacket from "../compat/ACPacket"

export default class Loader implements Load {

    public load() : void {
        new LoadCheck().registerCheck()
    }

    public check(ACPacket : ACPacket, PlayerData : PlayerData) : void {
        let loadCheck : LoadCheck = new LoadCheck()
        let checks : Array<any> = loadCheck.getActiveChecks()
        checks.forEach((check) => {
            check.handle(ACPacket, PlayerData)
        })
    }
}