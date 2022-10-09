export default class Config {

    private static configPath = "config.json"

    public static getJson(path : string): any {
        return fetch(path).then((response) => response.json())
    }

    public static getConfig(): any {
        return this.getJson(this.configPath)
    }

    public static getData(): any {
        return this.getConfig().then((config : any) => {
            return this.getJson(config.dataPath)
        })
    }

    public static setData(data: any): any {
        return this.getConfig().then((config : any) => {
            return fetch(config.dataPath, {
                method: "PUT",
                body: JSON.stringify(data)
            })
        })
    }
}