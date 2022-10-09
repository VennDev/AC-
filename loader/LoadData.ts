import Config from "../provider/Config";
import MoveUtil from "../utils/MoveUtil";

export default class LoadData {

    public static loadConfig() : void {
        Config.getConfig().then((config : any) => {
            let movement : any = config.settings.movement
            MoveUtil.setNormalSpeed(movement.normalSpeed)
            MoveUtil.setSprintSpeed(movement.sprintSpeed)
            MoveUtil.setSneakSpeed(movement.sneakSpeed)
            MoveUtil.setSprintSneakSpeed(movement.sprintSneakSpeed)
        })
    }
}