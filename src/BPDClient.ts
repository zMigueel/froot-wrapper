import axios from "axios"
import User from "./interfaces/User";
import Bot from "./interfaces/Bot";


export default class BPDClient {
    private API_URL = 'https://zuraaa.com/api'
    public constructor() {
    }
    /**
     * Retrieves a user
     * @param id The user ID
     * @returns The user object
     */
    public getUser(id: string): Promise<User> {
        return new Promise(async (resolve, reject) => {
            if (!id) reject("Missing user ID")
            try {
                const userResponseData = await axios.get(this.API_URL + "/users/" + id)
                const userData: User = userResponseData.data
                const bots = await axios.get(this.API_URL + "/users/" + id + "/bots")
                userData.bots = bots.data as Bot[]
                resolve(userData)
            } catch {
                reject("Invalid user")
            }
        })
    }

    /**
     * Retrieves a bot
     * @param id bot ID
     * @returns The bot object
     */
    public getBot(id: string): Promise<Bot> {
        return new Promise(async (resolve, reject) => {
            if (!id) reject("Missing bot ID")
            try {
                let botData = await axios.get(this.API_URL + "/bots/" + id)
                resolve(botData.data as Bot)
            } catch {
                reject("Invalid bot ID")
            }
        })
    }

    /**
     * Retrieves a user list of bots
     * @param userId The user ID to get the list
     * @returns An array with the user's bots
     */
    public getUserBots(userId: string): Promise<Bot[]> {
        return new Promise(async (resolve, reject) => {
            if (!userId) reject("Missing user ID")
            try {
                const data = await axios.get(this.API_URL + "/users/" + userId + "/bots")
                resolve(data.data as Bot[])
            } catch {
                reject("Invalid user")
            }
        })
    }
}

