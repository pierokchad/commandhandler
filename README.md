## 📚 Discord.js v14 command framework

>This is a simple and unique package which makes creating commands using .js and .ts a whole lot easier and make the code look cleaner.

### 🚀 Installation

**1**. Install package:

```bash
# npm
npm install @pierok/commandhandler

# yarn
yarn add @pierok/commandhandler

# pnpm
pnpm install @pierok/commandhandler
```

<bt></br>
**2**. In your command file, require the following:

*JavaScript:*
```js
const { Command } = require('@pierok/commandhandler');
```

*TypeScript:*
```ts
import { Command, CommandOptions, RunOptions } from '@pierok/commandhandler';
```

<bt></br>

### 📑 Code example - command format

*JavaScript:*
```js
const { Command } = require('@pierok/commandhandler');
const { Client, CommandInteraction, ApplicationCommandType } = require('discord.js');

module.exports = new Command({
    name: "example",
    description: "An example command",
    type: ApplicationCommandType.ChatInput,

    /**
     * @param {Object} options
     * @param {Client} options.client
     * @param {CommandInteraction} options.interaction
     * @param {Array<string>} options.args
     */
    async run({ client, interaction, args }) {
        await interaction.reply("Hello world!");
    },
});
```

*TypeScript:*
```ts
import { Command, CommandOptions, RunOptions } from '@pierok/commandhandler';
import { Client, CommandInteraction, ApplicationCommandType } from 'discord.js';

const commandOptions: CommandOptions = {
    name: "example",
    description: "An example command",
    type: ApplicationCommandType.ChatInput,

    /**
     * @param {RunOptions} options
     */
    async run({ client, interaction, args }: RunOptions) {
        await interaction.reply("Hello world!");
    },
};

export default new Command(commandOptions);
```

### 📑 Code example - subcommand format

*JavaScript:*
```js
const { Command } = require('@pierok/commandhandler');
const { Client, CommandInteraction, ApplicationCommandType, ApplicationCommandOptionType } = require('discord.js');

module.exports = new Command({
    name: "subcommand",
    description: "A command with subcommands",
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: "subcommand",
            description: "A subcommand",
            type: ApplicationCommandOptionType.Subcommand,
            options: [
                {
                    name: "input",
                    description: "Input value",
                    type: ApplicationCommandOptionType.String,
                    required: true
                }
            ]
        }
    ],

    /**
     * @param {Object} options
     * @param {Client} options.client
     * @param {CommandInteraction} options.interaction
     * @param {Array<string>} options.args
     */
    async run({ client, interaction, args }) {
        await interaction.reply(`Subcommand executed with args: ${args.join(', ')}`);
    },
});
```

*TypeScript:*
```ts
import { Command, CommandOptions, RunOptions } from '@pierok/commandhandler';
import { Client, CommandInteraction, ApplicationCommandType, ApplicationCommandOptionType } from 'discord.js';

const commandOptions: CommandOptions = {
    name: "subcommand",
    description: "A command with subcommands",
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: "subcommand",
            description: "A subcommand",
            type: ApplicationCommandOptionType.Subcommand,
            options: [
                {
                    name: "input",
                    description: "Input value",
                    type: ApplicationCommandOptionType.String,
                    required: true
                }
            ]
        }
    ],

    /**
     * @param {RunOptions} options
     */
    async run({ client, interaction, args }: RunOptions) {
        await interaction.reply(`Subcommand executed with args: ${args.join(', ')}`);
    },
};

export default new Command(commandOptions);
```

### 🔧 Bugs

> If you have any bugs, please submit them [here](https://github.com/pierokchad/commandhandler/issues).

### 🎲 Contributions

> You can [contribute](https://github.com/pierokchad/commandhandler/tree/main/docs/CONTRIBUTING.md) if you want.