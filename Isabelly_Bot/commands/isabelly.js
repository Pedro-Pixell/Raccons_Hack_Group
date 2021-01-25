// Puxando informações sobre o discord
const Discord = require('discord.js');


// Inicio ao desenvolvimento do comando isabelly
const execute = (bot,msg,args) => {
    let embed = new Discord.MessageEmbed()

    .setTimestamp()
    .setTitle(`MINHAS INFORMAÇÕES!`)
    .setDescription(`${msg.author.username}, me chamo Isabelly! Fui criada no intúito de trazer a melhor experiência possivel no discord para vocês! Sim, meu criador é o @Pedrão, ele com bastante esforço conseguiu me rearranjar da melhor forma, implementando os melhores comandos a mim. Ele durante todo o processo desejou me ver operante e conseguiu!! Ele realmente se superou e acredito que ainda irei crescer bastante como uma Robô autônoma! Agora um gostinho maior do que posso fazer está em "=ajuda", vai lá po. Tenho certeza que vai te esclarecer bastante tudo o que posso fazer! Obrigada por se importar comigo!`)
    .setColor("RANDOM")

    msg.channel.send(embed);
}


// Informações do comando!
module.exports ={
    name: "isabelly",
    help: "Apresenta informações sobre a Isabelly.",
    execute,
}