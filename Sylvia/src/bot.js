require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');

client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`);

    client.user.setPresence({
        status: 'idle',// can be set to "online","idle","dnd", and "invisible"
        activity: {
          name: 'add text',
          type: "STREAMING" // can be set to "PLAYING","STREAMING","LISTENING", and "WATCHING"
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
                        message.channel.send("type has been changed to PLAYING");
                        break;
                    case 'STREAMING':
                        message.channel.send("type has been changed to STREAMING");
                        break;
                    case 'LISTENING':
                        message.channel.send("type has been changed to LISTENING");
                        break;
                    case 'WATCHING':
                        message.channel.send("type has been changed to WATCHING");
                        break;
                }
            } else if(args[1] == status){
                switch(args[2]) {
                    case 'online':
                        message.channel.send("status has been changed to online");
                        client.user.setPresence({
                            status: 'online'
                        });
                        break;
                    case 'idle':
                        message.channel.send("status has been changed to idle");
                        client.user.setPresence({
                            status: 'idle'
                        });
                        break;
                    case 'dnd':
                        message.channel.send("status has been changed to dnd");
                        client.user.setPresence({
                            status: 'dnd'
                        });
                        break;
                    case 'invisible':
                        message.channel.send("status has been changed to invisible");
                        client.user.setPresence({
                            status: 'invisible'
                        });
                        break;
            } 
        }
    }
});



client.login(token);