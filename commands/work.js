module.exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 2500) + 1000;
    let work = client.eco.work(client.ecoAddUser, amount);
    if (work.onCooldown) return message.reply(`You are tired right now. Come back after ${work.time.minutes} minutes & ${work.time.seconds} seconds to work again.`);
    else return message.reply(`You worked as **${work.workedAs}** and earned **${work.amount}**.`);
};

module.exports.help = {
    name: "work",
    aliases: [],
    usage: "work"
}
