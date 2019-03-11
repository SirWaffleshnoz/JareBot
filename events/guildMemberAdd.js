var Discord = require('discord.js');

exports.run = (bot, member) => {
    var channel = member.guild.channels.get("399743950568685571");
    var join = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setFooter(member.guild.name)
        .setTimestamp()
        .setTitle('Member joined!')
        .setColor(3447003);

    channel.send({
        embed: join
    })
}