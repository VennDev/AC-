import PlayerData from "../data/PlayerData"
import ACPacket from "../compat/ACPacket"

export default interface Load {
    
    load() : void
    
    check(ACPacket : ACPacket, PlayerData : PlayerData) : void
}