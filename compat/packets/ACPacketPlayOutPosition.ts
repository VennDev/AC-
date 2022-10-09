import ACPacket from "../ACPacket"
import Protocol from "../../utils/Protocol"

export default class ACPacketPlayOutPosition extends ACPacket{

    private static ID : number = Protocol.ACPACKET_PLAY_OUT_POSITION;
    private username : string;
    private x : number;
    private y : number;
    private z : number;
    private yaw : number;
    private pitch : number;
    private onGround : boolean;

    public constructor(
        username : string,
        x : number,
        y : number, 
        z : number, 
        yaw : number, 
        pitch : number, 
        onGround : boolean
    ) {
        super();
        this.username = username;
        this.x = x;
        this.y = y;
        this.z = z;
        this.yaw = yaw;
        this.pitch = pitch;
        this.onGround = onGround;
    }

    public getID() : number {
        return ACPacketPlayOutPosition.ID;
    }

    public getUsername() : string {
        return this.username;
    }

    public getX() : number {
        return this.x;
    }

    public getY() : number {
        return this.y;
    }

    public getZ() : number {
        return this.z;
    }

    public getYaw() : number {
        return this.yaw;
    }

    public getPitch() : number {
        return this.pitch;
    }

    public isOnGround() : boolean {
        return this.onGround;
    }
}