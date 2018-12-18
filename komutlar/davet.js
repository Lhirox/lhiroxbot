const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  const embed = new Discord.RichEmbed()
  .setTitle("Beni sunucuna davet etmek için tıkla.")
    .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("RANDOM")
  .setDescription("**Bot yapımıcısı:** <@381604498549899264>")
  .setFooter('Lhirox Bot | Davet', client.user.avatarURL)
  .setThumbnail("")
  .setTimestamp()
  .addField("**\n**"+`[Destek Sunucusu](https://discord.gg/JqvtWXn)`,false)
  .setURL('https://discordapp.com/oauth2/authorize?client_id=521469932739887104&scope=bot&permissions=8')
  	.setThumbnail(client.user.avatarURL);

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Bot ile ilgili bilgi verir.',
  usage: '+davet'
};