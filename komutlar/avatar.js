exports.run = (client, msg, args) => {
  let member = msg.mentions.members.first()
  if(!member)return msg.channel.send({embed: {
color: Math.floor(Math.random() * (0xFFFFFF + 1)),
description: ('Kimin avatarına bakmak istiyorsun?')
}});
  const Discord = require('discord.js')
       const kullanicibilgimk = new Discord.RichEmbed()
       .setTitle(member.user.tag+" kullanıcısının profil fotoğrafı!")
       .setImage(member.user.avatarURL)
       .setFooter("Lhirox - Avatar Sistemi", "https://cdn.discordapp.com/avatars/495856795277983754/c10ae686c34aa487f95f8448d5ad3cfc.png?size=2048")
       return msg.channel.send(kullanicibilgimk);
   }
 
 
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
name: 'avatar',
description: 'Avatarınızı veya etiketlediğiniz kişinin avatarını atar.',
usage: '+avatar [@Kişi]'
}