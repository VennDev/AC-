import Check from "../Check"
import PlayerData from "../../data/PlayerData"
import ACPacket from "../../compat/ACPacket"
import ACPacketPlayOutPosition from "../../compat/packets/ACPacketPlayOutPosition"

export default class Speed extends Check {

    constructor() {
        super("Speed", "Speed", "1.0.0", 20, 0)
    }

    public handle(ACPacket : ACPacket, PlayerData : PlayerData) : void {
        if (ACPacket instanceof ACPacketPlayOutPosition) {
            
        }
    }
}