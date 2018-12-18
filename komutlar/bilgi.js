const Discord = require('discord.js');

exports.run = (client, message, params) => {
var embed = {
			color: 3447003,
			description: `**Bilgi**`,
			fields: [
				{
					name: '❯ Yapımcı',
					value: client.users.get('381604498549899264').tag,
					inline: false
				},
				{
					name: '❯ Sürüm',
					value: `Discord.JS:  v11.3.2
Bot:  v0.1.1`,
					inline: false
				},
				{
					name: '❯ Davet',
					value: `https://discordapp.com/oauth2/authorize?client_id=521469932739887104&scope=bot&permissions=8`,
					inline: false
				},
				{
					name: '❯ Destek sunucusu',
					value: `https://discord.gg/JqvtWXn`,
					inline: false
				},
			],
			footer: {
			  icon_url: client.user.avatarURL,
			  text: "© Lhirox | Bilgilerim"
			},
			thumbnail: { url: client.user.avatarURL }
    };
		return message.channel.send({embed})};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Bot hakkındakilerini gösterir',
  usage: '+bilgi'
};
