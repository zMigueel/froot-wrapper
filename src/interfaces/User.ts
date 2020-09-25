import Dates from "./Dates";
import Bot from "./Bot";

export default interface User {
    /** An object of Dates */
    dates: Dates
    /** The user's description */
    description?: string
    /** The user's ID */
    id: string
    /** The user's username */
    username: string
    /** The hashcode avatar of the user */
    avatar?: string
    /** An array with all user's bots or an empty array when the user user has no bots
    Shortcut to getUserBots() */
    bots: Bot[]
}
