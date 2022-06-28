const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'who',
    aliases: [],
    permissions: [],
    execute(message, args) {
        if (message.mentions.users.first()) {
            const userInfo = message.mentions.users.first();
            const guildUserInfo = message.guild.members.cache.get(userInfo.id);

            const footer = `Requested by ${message.author.username}`;
            
            const embed = new MessageEmbed()
                .setTitle(`${userInfo.tag}'s info`)
                // .setDescription(`${message.mentions.users.first().username} is a ${message.mentions.users.first().bot ? 'bot' : 'user'}`)
                .addFields(
                    {name: 'ID:', value: userInfo.id},
                    // {name: 'Joined:', value: guildUserInfo.joinedAt},
                    // {name: 'Created:', value: userInfo.createdAt},
                    {name: 'Roles:', value: guildUserInfo.roles.cache.map(role => role).join(' ')}
                )
                .setColor(userInfo.bot ? '#0099ff' : '#ff0000')
                .setThumbnail(userInfo.avatarURL({dynamic: true}))
                .setTimestamp()
                .setFooter(footer);
            message.channel.send({embeds: [embed]});

            console.log(guildUserInfo.roles.cache.map(role => role.name).join(' '));
        }
    }
}