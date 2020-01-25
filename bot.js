const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("670449201955733526")
setInterval(function() {
channel.send(`لا اله الا الله,, محمد رسول الله`);
}, 30)
  
});

client.login(process.env.BOT_TOKEN);
