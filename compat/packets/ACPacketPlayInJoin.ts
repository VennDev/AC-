import ACPacket from "../ACPacket"
import Protocol from "../../utils/Protocol"

export default class ACPacketPlayInJoin extends ACPacket{

    private static ID : number = Protocol.ACPACKET_PLAY_IN_JOIN
    private username : string

    public constructor(username : string) {
        super()
        this.username = username
    }

    public getID() : number {
        return ACPacketPlayInJoin.ID
    }

    public getUsername() : string {
        return this.username
    }
}