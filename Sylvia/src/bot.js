require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');

client.on('ready', () => {
	console.log('Ready!');

    client.user.setPresence({
        status: "online",  //You can show online, idle....
        game: {
            name: "SafeBuckle is the best :3 btw lyla stop removing it you're breaking my code grrrrrr",  //The message shown
            type: "PLAYING" //PLAYING: WATCHING: LISTENING: STREAMING:
        }
    });
});

function emoji (id) {
    return bot.emojis.get(id).toString ();
}

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
        case 'lyladumb':
            message.channel.send(emoji("761258333625122897"));
            break;
    }
});



client.login(token);