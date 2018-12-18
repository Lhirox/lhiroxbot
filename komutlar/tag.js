const Discord = require('discord.js');

 exports.run = (client, message, args) => {
   var cevaplar = ['**Merhaba Sunucumuza Hoşgeldin Tagmızı Almak İstiyorsan İsminizin Herhangi Bir Yerine** \n † veya 🌹  ' ];
   var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
   message.reply(cevap);
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [''],
 permLevel: 0 ,
};

exports.help = {
 name: 'tag',
 description: '',
 usage: 'tag'
};