const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    const embed = new MessageEmbed()
        .setAuthor("Commands")
        .setTitle("Make sure to vote for me")
        .setURL("https://top.gg/bot/911376535129325619/vote")
        .setDescription(`Total Commands: ${client.commands.size}`)
        .setColor("BLURPLE")
        .setTimestamp()
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(message.author.tag, message.author.displayAvatarURL);
    client.commands.forEach(cmd => {
        embed.addField(`${cmd.help.name}`, `Aliases: ${cmd.help.aliases.join(", ") || "None"}\nUsage: \`${client.prefix}${cmd.help.usage}\``, true);
    });
    return message.channel.send(embed);
}

exports.help = {
    name: "help",
    aliases: ["h"],
    usage: `help`
}
