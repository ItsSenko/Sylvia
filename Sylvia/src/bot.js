require('dotenv').config();

const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

const { fileURLToPath } = require('url');
const { send } = require('process');

client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`);

    client.user.setPresence({
        status: 'dnd',// can be set to "online","idle","dnd", and "invisible"
        activity: {
          name: 'Lyla Lofi♡',
          type: "LISTENING" // can be set to "PLAYING","STREAMING","LISTENING", and "WATCHING"
        }
      });
 });

client.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) { // switch case checking what the first word after the prefix is used.
        case 'lock':
            if (message.channel.permissionsFor('816420654043758652').has("SEND_MESSAGES", true)){
                message.channel.updateOverwrite(message.channel.guild.roles.everyone, {  SEND_MESSAGES: false});
                return message.channel.send('locked');
            }
            else
                message.channel.updateOverwrite(message.channel.guild.roles.everyone, {SEND_MESSAGES: true});
                return message.channel.send('unlocked');
        case 'test':
            client.commands.get('test').execute(message, args, Discord, client);
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
                new Discord.MessageEmbed()
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
            if(args[1] === 'status'){
                switch(args[2]) {
                    case 'online':
                        message.channel.send("status has been changed to online");
                        client.user.setStatus("online");
                        break;
                    case 'idle':
                        message.channel.send("status has been changed to idle");
                        client.user.setStatus("idle");
                        break;
                    case 'dnd':
                        message.channel.send("status has been changed to dnd");
                        client.user.setStatus("dnd");
                        break;
                    case 'invisible':
                        message.channel.send("status has been changed to invisible");
                        client.user.setStatus("invisible");
                        break;
                }
            }   else if (args[1] === 'name'){
                    var text_content = message.content.split(" ").slice(2).join(' ')
                    message.channel.send("name has been changed to " + text_content);
                    return client.user.setActivity(text_content);
                }
    }
        
});



client.login(token);