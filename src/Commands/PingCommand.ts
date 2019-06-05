import { Command, CommandBase, CommandParser, Event } from '@autobot/common';
import { RichEmbed }                                  from "discord.js";

/**
 * Delete a HelpDesk Tag.
 * Note: The tag must not be in use by questions!
 *
 * Example: !tagdelete name=<tagname>
 *
 */
@Command
export class PingCommand extends CommandBase {

    public constructor() {

        super({

            event: Event.MESSAGE,
            name: `!ping`,
            group: 'help',
            description: 'Returns ping and uptime.'

        });

    }

    public async run(command: CommandParser) {

        let totalSeconds = (command.client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;

        command.obj.reply(new RichEmbed().setTitle('Pong!')
                                         .addField('Ping Time', new Date().getTime() - command.obj.message.createdTimestamp + " ms")
                                         .addField('Uptime', `${ days } days, ${ hours } hours, ${ minutes } minutes and ${ seconds } seconds`));

    }

}
