const Discord = require('discord.js');
require('dotenv').config();

// Creating a new Discord client
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



client.commands = new Discord.Collection(); // Create a new collection for commands
client.events = new Discord.Collection(); // Create a new collection for events

// Load the command and event handlers
['commandHandler', 'eventHandler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
}); 


// Login to Discord Bot
client.login(process.env.DISCORD_TOKEN);