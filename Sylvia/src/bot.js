require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content === '!horny') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('Same :flushed:');
    }
});



client.login('NjM4NDU3NjY2Nzc1Mjg1NzYw.XbdACQ.6kIrl9Oky7oHPvI6yYtmSIspQ7c');