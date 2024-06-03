## 📚 Discord.js v14 command framework

> This is a simple and unique package which makes creating commands a whole lot easier and make the code look cleaner.

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

```js
const { Command } = require('@pierok/commandhandler')
```

<bt></br>

### 📑 Example code - command format

```js
const { Command } = require('@pierok/commandhandler');
const discord = require('discord.js');

module.exports = new Command({
    name: "",
    description: "",
    type: discord.ApplicationCommandType.ChatInput,

    /**
     * @param {discord.Client} client
     * @param {discord.CommandInteraction} interaction
     */

    async execute(client, interaction) {

    },
});
```

### 📑 Example code - subcommand format

```js
const { Command } = require('@pierok/commandhandler');
const discord = require('discord.js');

module.exports = new Command({
    name: "",
    description: "",
    type: discord.ApplicationCommandType.ChatInput,
    options: [
        {
            name: "",
            description: "",
            type: discord.ApplicationCommandOptionType.Subcommand,
            options: [
                {
                    name: "",
                    description: "",
                    type: discord.ApplicationCommandOptionType.String,
                    required: true
                }
            ]
        }
    ],

    /**
     * @param {discord.Client} client
     * @param {discord.CommandInteraction} interaction
     */

    async execute(client, interaction) {

    },
});
```
**NOTE:** *Execute can be replaced with run if that is how you run your commands however, support will not be given if so.*

### 🔧 Bugs

> If you have any bugs, please submit them [here](https://github.com/pierokchad/commandhandler/issues).

### 🎲 Contributions

> You can [contribute](https://github.com/pierokchad/commandhandler/tree/main/docs/CONTRIBUTING.md) if you want.
