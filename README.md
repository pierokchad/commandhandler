## 📚 Discord.js v14 command framework

> This is a simple and unique package which makes creating commands a whole lot easier and (...)

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

### 🔧 Bugs

> If you encounter any bugs feel free to dm me, [email](mailto:pierok420@gmail.com) or [discord](https://discord.com/users/577571414186393661/).

### 🎲 Contributions

> You can [contribute](./docs/CONTRIBUTING.md) if you want.
