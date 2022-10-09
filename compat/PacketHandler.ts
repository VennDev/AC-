const handlers : Map<any, any> = new Map();

function registerHandler(packetId: number, handler: any) : void {
    handlers.set(packetId, handler);
}

function handlePacket(packetId: number, packet: any) : void {
    let handler : any = handlers.get(packetId);
    if (handler) {
        handler(packet);
    }
}