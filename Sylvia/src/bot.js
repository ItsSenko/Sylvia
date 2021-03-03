require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    switch (args[0]) {
        case 'help':
            message.channel.send('fuck off');
            break;
    }
    
	if (message.content === `${prefix}horny`) {
        message.channel.send('Same :flushed:');

    }else if (command === 'args-info') {
        if (!args.length) {
            return message.channel.send(`You didnt provide any arguements, ${message.author}!`);
        }
        else if (args[0] === 'hen') {
            return message.channel.send('tai');
        }
        message.channel.send(`First arguement: ${args[0]}`);
    }
    else if (command === 'kick'){
        if (!message.mentions.users.size){
            return message.reply('you must tag the person youou wish to kick');
        }
        const taggedUser = message.mentions.users.first();
        message.channel.send(`You really wanted to kick: ${taggedUser.username}`);

        
    }
    else if (command === 'avatar'){
        if (!message.mentions.users.size){
            return message.channel.send(`Your avi: <${message.author.displayAvatarURL({ format: "png", dynamic: true})}>`); 
        }
        const avatarList = message.mentions.users.map(user => {
            return `${user.username}'s avi: <${user.displayAvatarURL({format: "png", dynamic: true})}>`;
        });
        message.channel.send(avatarList);
    }
});



client.login(token);