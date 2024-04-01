## 📚 Discord.js v14 command framework

> This is a simple and unique package which makes creating commands a whole lot easier and make the code look cleaner.

### 🚀 Installation

**1**. Within your bot's directory run

```bash
npm i @vertcode/pierokhandler
```

<bt></br>
**2**. In your command file, require the following

```js
const { Command } = require('@vertcode/pierokhandler')
```

<bt></br>

### 📑 Code example

```js
const { Command } = require('@vertcode/pierokhandler');
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

### 🔧 Bugs

> If you have any bugs, please submit them [here](https://github.com/pierokchad/pierokhandler/issues).

### 🎲 Contributions

> You can [contribute](https://github.com/pierokchad/pierokhandler/tree/main/docs/CONTRIBUTING.md) if you want.
