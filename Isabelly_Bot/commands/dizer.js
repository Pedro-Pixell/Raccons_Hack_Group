// Início ao comando dizer onde a isabelly irá repetir oque o usuario quiser
const Discord = require('discord.js');

// Início ao desenvolvimento do comando dizer!
const execute = (bot,msg,args) => {
    msg.channel.send(args);
}


// Aba para o module exports. Informações.
module.exports ={
    name: "d",
    help: "Repete informações",
    execute,
}