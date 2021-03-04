require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');

client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({
        status: "dnd",// can be set to "online","idle","dnd", and "invisible"
        activity: {
          name: "Lyla Lofi♡",
          type: "LISTENING"// can be set to "PLAYING","STREAMING","LISTENING", and "WATCHING"
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
    }
});



client.login(token);