import Votes from "./Votes";

export default interface Bot {
    /* The ID of the bot */
    _id: string
    /* The username of the bot */
    username: string
    /* The discriminator of the bot */
    discriminator: string
    /* The bot owner */
    owner: string
    /* The bot avatar */
    avatar?: string
    /* The bot status. Either 'online', 'away', 'dnd' or 'offline' */
    status: string
    /* Dates related to the account */
    dates: object
    /* Details of the bot */
    details: object
    /* The tags of the bot */
    tags: string
    /* An array of the secondary owners of the bot */
    otherOwners: string[]
    /* The prefix of the bot */
    prefix: string
    /* The custom invite URL to add the bot */
    customInviteLink: string
    /* The library the bot was developed on */
    library: string
    /* The short description of the bot */
    shortDescription: string
    /* The long description of the bot */
    longDescription?: string
    /* The long description of the bot in HTML format */
    htmlDescription: string
    /* The website of the bot */
    website: string
    /* The support server of the bot */
    supportServer: string
    /* The custom URL of the bot */
    customURL: string
    /* An object of Votes */
    votes: Votes

}
