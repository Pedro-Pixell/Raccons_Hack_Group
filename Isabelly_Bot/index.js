// Passando as requisições para que o Bot funcione!
const Discord = require('discord.js'); // Passando que variavel é Discord
const bot = new Discord.Client(); // Passando que o nome que se refere a Isabelly é bot
const dotenv = require("dotenv"); // Biblioteca para facilitar o desenvolvimento
const fs = require("fs"); // Outra biblioteca para facilitar o desenvolvimento
const path = require("path"); // Puxando variáveis do path.


// Puxar informações do arquivo env.
dotenv.config(); // Trazendo a Central de configurações do dotenv


// Trazer informações das pasta commands
bot.commands = new Discord.Collection();
const commandFiles = fs
    .readdirSync(path.join(__dirname,"./commands"))
    .filter((filename) => filename.endsWith(".js"));

for (var filename of commandFiles) {
    const command = require(`./commands/${filename}`);
    bot.commands.set(command.name, command);
};


// Aba para as requisições de música
bot.queues = new Map();


// Quando no terminal for digitado *node .* essas mensagens serão exibidas.
bot.once('ready', () => {
    console.log('==================================@@@@@==================================');
    console.log('=============== Estou Pronta Para Ser Usada! Bot:Isabelly ===============');
    console.log('==================================@@@@@==================================');
    bot.user.setActivity('NBA Finals - Lakers vs Heat', {type:"WATCHING"});
});


// Criando evento mensagem, onde o bot se nn reconhecer o comando responderá de uma outra forma.
bot.on("message", (msg) => {
    if (!msg.content.startsWith(process.env.PREFIX) || msg.author.bot) return;

    const args = msg.content.slice(process.env.PREFIX.length).split(" ");
    const command = args.shift();

    try {
        bot.commands.get(command).execute(bot,msg,args);
    } catch(e) {
        return msg.channel.send(`${msg.author.username}, infelizmente não consigo capturar nenhum comando associado ao que foi dito. Se não lembra bem de um você achará oque precisa com o comando "=ajuda".`);
    }
});


// Colocando a Isabelly para rodar!
bot.login(process.env.TOKEN);