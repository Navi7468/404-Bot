const { MessageEmbeds } = require('discord.js');

module.exports = {
    name: 'bal',
    aliases: [],
    permissions: [],
    description: 'Check your balance',
    async execute(message, args, client) {
        console.log("bal command");
    }
}