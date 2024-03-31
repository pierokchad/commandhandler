## 📚 Discord.js v14 command framework

It just makes created commands a whole lot easier and the file look cleaner.

### 🚀 Installation

**1**. Within your bot's directory run

```bash
npm i pierokhandler
```

<bt></br>
**2**. In your command file, require the following

```js
const { Command } = require('pierokhandler')
```

<bt></br>

### 📑 Code example

```js
const { Command } = require('pierokhandler');
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

### 🎲 Contributions

You can [contribute](./docs/CONTRIBUTING.md) if you want