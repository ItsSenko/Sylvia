require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');

client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({
        status: "dnd",//can be set to "online","idle","dnd", and "invisible"
        activity: {
          name: "Lyla Lofi♡",
          type: "LISTENING"//can be set to "PLAYING","STREAMING","LISTENING", and "WATCHING"
        }
      });
 });

client.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case 'help':
            message.channel.send('fuck off');
            break
        case 'horny':
            message.channel.send('Same :flushed:');
            break;
        case 'kick':
            if (!message.mentions.users.size){
                return message.reply('you must tag the person youou wish to kick');
            }
            const taggedUser = message.mentions.users.first();
            message.channel.send(`You really wanted to kick: ${taggedUser.username}`);
            break;
        case 'avatar':
            if (!message.mentions.users.size){
                return message.channel.send(`Your avi: <${message.author.displayAvatarURL({ format: "png", dynamic: true})}>`); 
            }
                const avatarList = message.mentions.users.map(user => {
                return `${user.username}'s avi: <${user.displayAvatarURL({format: "png", dynamic: true})}>`;
            });
            message.channel.send(avatarList);
            break;
        case 'watashi_ga_kita':
            message.channel.send("Young Midoria this bot sucks ass");
            break;
        case 'twitch':
            message.channel.send("https://twitch.tv/AzuVR");
            break;
    }
});



client.login(token);