const Discord = require("discord.js");
const bot = new Discord.Client();

const prefix = "x-";

bot.on("message", async message => {

  let msg = message.content.toUpperCase();
  let sender = message.author;
  let cont = message.content.slice(prefix.length).split(" ");
  let args = cont.slice(1);
 

  if(!message.content.startsWith(prefix)) return;
  if(message.author.bot) return message.channel.send("I dont listen to bots!")

  var cmd = bot.commands.get(cont[0])
  if(cmd) cmd.run(bot, message, args)
}); 

bot.login(process.env.token)


if(cmd === `${prefix}ping`){
  message.channel.send (`Pong! Latency:  ${bot.pings}`)
}

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity("name", {type: "PLAYING/STREAMING"});

});