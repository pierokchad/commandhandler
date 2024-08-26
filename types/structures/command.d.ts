import { ChatInputCommandInteraction, Client, GuildMember, PermissionResolvable, ChatInputApplicationCommandData } from "discord.js";
export interface RunOptions {
    client: Client;
    interaction: ChatInputCommandInteraction & {
        member: GuildMember;
    };
    args: string[];
}
export type RunFunction = (options: RunOptions) => any;
export type CommandOptions = {
    userPermissions?: PermissionResolvable[];
    run: RunFunction;
} & ChatInputApplicationCommandData;
export declare class Command {
    constructor(commandOptions: CommandOptions);
}
