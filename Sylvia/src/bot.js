require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');


//sfhagfjsa
var StatusChangeStatus = "online";
var StatusChangeText = "text";
var StatusChangeType = "PLAYING";

client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`);

    client.user.setPresence({
        status: StatusChangeStatus,// can be set to "online","idle","dnd", and "invisible"
        activity: {
          name: StatusChangeText,
          type: StatusChangeType // can be set to "PLAYING","STREAMING","LISTENING", and "WATCHING"
        }
      });
 });

client.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) { // switch case checking what the first word after the prefix is used.
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
            const member = message.mentions.members.first() || message.member;

            message.channel.send(
                new MessageEmbed()
                    .setTitle(`${member.user.tag}'s avatar`)
                    .setImage(member.user.displayAvatarURL({ dynamic: true, size: 2048}))
                    .setColor("RANDOM")
            )

            break;
        case 'watashi_ga_kita':
            message.channel.send("Young Midoria this bot sucks ass");
            break;
        case 'twitch':
            message.channel.send("https://twitch.tv/AzuVR");
            break;
        case 'status':
            if(args[1] == type){
                switch(args[2]) {
                    case 'PLAYING':
                        StatusChangeType = PLAYING;
                        break;
                    case 'STREAMING':
                        StatusChangeType = STREAMING;
                        break;
                    case 'LISTENING':
                        StatusChangeType = ISTENING;
                        break;
                    case 'WATCHING':
                        StatusChangeType = WATCHING;
                        break;
                }
            } else if(args[1] == status){
                switch(args[2]) {
                    case 'online':
                        StatusChangeStatus = online;
                        break;
                    case 'idle':
                        StatusChangeStatus = idle;
                        break;
                    case 'dnd':
                        StatusChangeStatus = dnd;
                        break;
                    case 'invisible':
                        StatusChangeStatus = invisible;
                        break;
            } 
        } else{
            message.channel.send("Make sure to use a valid command");
        }
    }
});



client.login(token);