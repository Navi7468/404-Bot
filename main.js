const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client(
    { intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS",
        "GUILD_INTEGRATIONS",
        "GUILD_VOICE_STATES",
        "DIRECT_MESSAGES"
    ]}
);
const fs = require('fs');
const ms = require('ms');



client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['commandHandler', 'eventHandler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
});


client.login(process.env.DISCORD_TOKEN);