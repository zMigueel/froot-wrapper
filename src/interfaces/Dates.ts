export default interface Dates {
    /** The account creation date of the user */
    firstSeen: string
    /** The last time the user has added a bot in the bot list */
    lastBotAdd: string
    /** The exact time when the user can vote again in GMT-6 format  */
    nextVote: string
}
