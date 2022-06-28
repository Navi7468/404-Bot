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
const mongoose = require('mongoose');
const fs = require('fs');
const ms = require('ms');



client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['commandHandler', 'eventHandler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
});


mongoose.connect(process.env.MONGODB_URI, {
}).then(() => {
    console.log('Connected to Database');
}).catch(err => {
    console.log(err);
});


client.login(process.env.DISCORD_TOKEN);