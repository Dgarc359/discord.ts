import type { CommandInteraction } from "discord.js";
import { MessageEmbed } from "discord.js";
import { Discord, MetadataStorage, Slash } from "discordx";

import { Pagination, PaginationType } from "../../../src/index.js";

@Discord()
export class Example {
  // example: pagination for all slash command
  @Slash("slashes", { description: "Pagination for all slash command" })
  slashes(interaction: CommandInteraction): void {
    const commands = MetadataStorage.instance.applicationCommands.map((cmd) => {
      return { description: cmd.description, name: cmd.name };
    });

    const pages = commands.map((cmd, i) => {
      return new MessageEmbed()
        .setFooter({ text: `Page ${i + 1} of ${commands.length}` })
        .setTitle("**Slash command info**")
        .addField("Name", cmd.name)
        .addField("Description", cmd.description);
    });

    new Pagination(interaction, pages, {
      filter: (interact) => interact.user.id === interaction.user.id,
      type: PaginationType.Button,
    }).send();
  }
}
