const fs = require('fs');

module.exports = {
    name: 'test',
    description: 'test command used for testing',
    execute(message, args, Discord){
        message.channel.send("test");
    }
}