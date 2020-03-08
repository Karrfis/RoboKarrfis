const Commando = require('discord.js-commando');
const TOKEN = require('./config.js');
const ID = require('./config.js');

const bot = new Commando.Client
(
    {
        commandPrefix: '+' ,
        owner: (ID.ID) ,
        disableEveryone: true,
    }
);

bot.registry
    .registerDefaultTypes()
    .registerGroup(['simple', 'Simple'])
    .registerGroup(['music', 'Music'])
    .registerDefaultGroups()
    .registerDefaultCommands({help: false})
    .registerCommandsIn(__dirname + "/Commands");

global.servers = {};

bot.on('warn', console.warn);
bot.on('error', console.error);
bot.on('ready' , async () => 
bot.user.setPresence({game:{name:'You Sleep|+help for more', type: 3}})), console.log('Booted up, online and ready to go')
bot.on('disconnect', () => console.log('disconnected, attempting to reconnect....now'));
bot.on('reconnecting', () => console.log('I am reconnecting'));

bot.on('message', function(message)  
{

if (message.author.bot)
{
    return null;
}
else {

if (message.content.includes ("morning"))
{
   message.channel.send(message.author + (" Morning!"));
    console.log("Morning")
}
else if (message.content.includes("Morning")){ message.channel.send(message.author + (" Morning!")); console.log("Morning")}
else if (message.content.includes("if you were in a voice channel, i would have played a fancy song but blame <@329019869997563904>"))
{ 
    const hey = message.guild.emojis.find(emoji => emoji.name == "stickerHey");
    message.react (hey);
    console.log("Reac")
}

else {
switch(message.content)
{
    case "fight me":
         message.reply("Its time to throw down")
         console.log("Fight")
    break;

    case "f":
        message.react("🇫")
        console.log ("pay respects")
    break;

    case "F":
    message.react("🇫")
    console.log ("pay respects")
    break;

    case "^":
        message.channel.send("^")
        console.log("^")
    break;
}
}

}}); 

bot.login(TOKEN.TOKEN)