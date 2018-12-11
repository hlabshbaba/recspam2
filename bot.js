const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("522076081285759016")
setInterval(function() {
channel.send(`1spam`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
