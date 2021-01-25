// Início ao comando ajuda Barra onde serão apresentadas as informações do discord
const Discord = require('discord.js');


// Início ao desenvolvimento do comando ajuda!
const execute = (bot,msg,args) => {
        let embed = new Discord.MessageEmbed()
    
        .setTimestamp()
        .setTitle(`Salve ${msg.author.username}! Meu nome é Isabelly! \nNeste campo te apresento minhas funções!`)
        .setColor("#e2fd16")
        .setDescription(`⚙️ Lembre-se que meu prefixo é :"=" ⚙️`)
        .addField(`💡 =r <número de mensagens>`, "Nesse comando faço a remoção das mensagens de um chat. \n| Número mínimo 2 | - | Número máximo 100 |", true)
        .addField(`💡 =sinfo`, "Nesse comando apresento informações sobre este servidor!", true)
        .addField(`💡 =uinfo`, "Nesse comando apresento informações sobre você!", true)
        .addField(`💡 =minfo`, "Aqui apresento informações sobre os comandos de música!", true)
        .addField(`💡 =isabelly`, "Aqui apresento algumas informações sobre mim!", true);
    
        msg.channel.send(embed);
}


// Aba para o module exports. Informações.
module.exports ={
    name: "ajuda",
    help: "Mostra a ajuda para o usuário!",
    execute,
}