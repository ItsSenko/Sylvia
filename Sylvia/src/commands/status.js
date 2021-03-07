const { Message } = require("discord.js");

if (message.content === `${prefix}status`){
    let filter = m => m.author.id === message.author.id
    message.channel.send('Which Presence would you like? Your options are: online, idle, dnd, invisible.').then(()=>{
        message.channel.awaitMessages(filter,{
            max: 1,
            time: 30000,
            errors: ['time']
        })
        .then(message =>{
            message = message.first()
            if (message.content === 'online'){
                let filter = m => m.author.id === message.author.id
                message.channel.send('Which status type would you like? Your options are: Playing, Watching, Listening, Streaming.').then(()=>{
                message.channel.awaitMessages(filter,{
                max: 1,
                time: 30000,
                errors: ['time']
                })
                .then(message =>{
                    message = message.first()
                    if (message.content === 'Listening'){
                        let filter = m => m.author.id === message.author.id
                        message.channel.send('please do set and then your title.').then(()=>{
                        message.channel.awaitMessages(filter,{
                        max: 1,
                        time: 30000,
                        errors: ['time']
                        })
                        .then(message =>{
                            message = message.first()
                            if (message.content.startsWith("set")){
                                let sentence = message.content.split(" ");
                                sentence.shift();
                                sentence = sentence.join(" ");
                                client.user.setPresence({
                                    status: 'online',// can be set to "online","idle","dnd", and "invisible"
                                    activity: {
                                      name: sentence,
                                      type: "LISTENING" // can be set to "PLAYING","STREAMING","LISTENING", and "WATCHING"
                                    }
                                  });

                                message.channel.send(sentence + " was set.");
                                
                            }
                        })
                        .catch(collected =>{
                            message.channel.send('Timed Out.');
                        });
                        })
                    } else if (message.content === 'Playing'){
                        let filter = m => m.author.id === message.author.id
                        message.channel.send('please do set and then your title.').then(()=>{
                        message.channel.awaitMessages(filter,{
                        max: 1,
                        time: 30000,
                        errors: ['time']
                        })
                        .then(message =>{
                            message = message.first()
                            if (message.content.startsWith("set")){
                                let sentence = message.content.split(" ");
                                sentence.shift();
                                sentence = sentence.join(" ");
                                client.user.setPresence({
                                    status: 'online',// can be set to "online","idle","dnd", and "invisible"
                                    activity: {
                                      name: sentence,
                                      type: "PLAYING" // can be set to "PLAYING","STREAMING","LISTENING", and "WATCHING"
                                    }
                                  });

                                message.channel.send(sentence + " was set.");
                                
                            }
                        })
                        .catch(collected =>{
                            message.channel.send('Timed Out.');
                        });
                        })

                    } else if (message.content === 'Watching'){
                        let filter = m => m.author.id === message.author.id
                        message.channel.send('please do set and then your title.').then(()=>{
                        message.channel.awaitMessages(filter,{
                        max: 1,
                        time: 30000,
                        errors: ['time']
                        })
                        .then(message =>{
                            message = message.first()
                            if (message.content.startsWith("set")){
                                let sentence = message.content.split(" ");
                                sentence.shift();
                                sentence = sentence.join(" ");
                                client.user.setPresence({
                                    status: 'online',// can be set to "online","idle","dnd", and "invisible"
                                    activity: {
                                      name: sentence,
                                      type: "WATCHING" // can be set to "PLAYING","STREAMING","LISTENING", and "WATCHING"
                                    }
                                  });

                                message.channel.send(sentence + " was set.");
                                
                            }
                        })
                        .catch(collected =>{
                            message.channel.send('Timed Out.');
                        });
                        })

                    } else if (message.content === 'Streaming'){
                        let filter = m => m.author.id === message.author.id
                        message.channel.send('please do set and then your title.').then(()=>{
                        message.channel.awaitMessages(filter,{
                        max: 1,
                        time: 30000,
                        errors: ['time']
                        })
                        .then(message =>{
                            message = message.first()
                            if (message.content.startsWith("set")){
                                let sentence = message.content.split(" ");
                                sentence.shift();
                                sentence = sentence.join(" ");
                                client.user.setPresence({
                                    status: 'online',// can be set to "online","idle","dnd", and "invisible"
                                    activity: {
                                      name: sentence,
                                      type: "STREAMING" // can be set to "PLAYING","STREAMING","LISTENING", and "WATCHING"
                                    }
                                  });

                                message.channel.send(sentence + " was set.");
                                
                            }
                        })
                        .catch(collected =>{
                            message.channel.send('Timed Out.');
                        });
                        })

                    }
                })
                .catch(collected =>{
                    message.channel.send('Timed Out.');
                });
                })
            } else if (message.content === 'idle'){
                let filter = m => m.author.id === message.author.id
                message.channel.send('Which status type would you like? Your options are: Playing, Watching, Listening, Streaming.').then(()=>{
                message.channel.awaitMessages(filter,{
                max: 1,
                time: 30000,
                errors: ['time']
                })
                .then(message =>{
                    message = message.first()
                    if (message.content === 'Listening'){
                        let filter = m => m.author.id === message.author.id
                        message.channel.send('please do set and then your title.').then(()=>{
                        message.channel.awaitMessages(filter,{
                        max: 1,
                        time: 30000,
                        errors: ['time']
                        })
                        .then(message =>{
                            message = message.first()
                            if (message.content.startsWith("set")){
                                let sentence = message.content.split(" ");
                                sentence.shift();
                                sentence = sentence.join(" ");
                                client.user.setPresence({
                                    status: 'idle',// can be set to "online","idle","dnd", and "invisible"
                                    activity: {
                                      name: sentence,
                                      type: "LISTENING" // can be set to "PLAYING","STREAMING","LISTENING", and "WATCHING"
                                    }
                                  });

                                message.channel.send(sentence + " was set.");
                                
                            }
                        })
                        .catch(collected =>{
                            message.channel.send('Timed Out.');
                        });
                        })
                    } else if (message.content === 'Playing'){
                        let filter = m => m.author.id === message.author.id
                        message.channel.send('please do set and then your title.').then(()=>{
                        message.channel.awaitMessages(filter,{
                        max: 1,
                        time: 30000,
                        errors: ['time']
                        })
                        .then(message =>{
                            message = message.first()
                            if (message.content.startsWith("set")){
                                let sentence = message.content.split(" ");
                                sentence.shift();
                                sentence = sentence.join(" ");
                                client.user.setPresence({
                                    status: 'idle',// can be set to "online","idle","dnd", and "invisible"
                                    activity: {
                                      name: sentence,
                                      type: "PLAYING" // can be set to "PLAYING","STREAMING","LISTENING", and "WATCHING"
                                    }
                                  });

                                message.channel.send(sentence + " was set.");
                                
                            }
                        })
                        .catch(collected =>{
                            message.channel.send('Timed Out.');
                        });
                        })

                    } else if (message.content === 'Watching'){
                        let filter = m => m.author.id === message.author.id
                        message.channel.send('please do set and then your title.').then(()=>{
                        message.channel.awaitMessages(filter,{
                        max: 1,
                        time: 30000,
                        errors: ['time']
                        })
                        .then(message =>{
                            message = message.first()
                            if (message.content.startsWith("set")){
                                let sentence = message.content.split(" ");
                                sentence.shift();
                                sentence = sentence.join(" ");
                                client.user.setPresence({
                                    status: 'idle',// can be set to "online","idle","dnd", and "invisible"
                                    activity: {
                                      name: sentence,
                                      type: "WATCHING" // can be set to "PLAYING","STREAMING","LISTENING", and "WATCHING"
                                    }
                                  });

                                message.channel.send(sentence + " was set.");
                                
                            }
                        })
                        .catch(collected =>{
                            message.channel.send('Timed Out.');
                        });
                        })

                    } else if (message.content === 'Streaming'){
                        let filter = m => m.author.id === message.author.id
                        message.channel.send('please do set and then your title.').then(()=>{
                        message.channel.awaitMessages(filter,{
                        max: 1,
                        time: 30000,
                        errors: ['time']
                        })
                        .then(message =>{
                            message = message.first()
                            if (message.content.startsWith("set")){
                                let sentence = message.content.split(" ");
                                sentence.shift();
                                sentence = sentence.join(" ");
                                client.user.setPresence({
                                    status: 'idle',// can be set to "online","idle","dnd", and "invisible"
                                    activity: {
                                      name: sentence,
                                      type: "STREAMING" // can be set to "PLAYING","STREAMING","LISTENING", and "WATCHING"
                                    }
                                  });

                                message.channel.send(sentence + " was set.");
                                
                            }
                        })
                        .catch(collected =>{
                            message.channel.send('Timed Out.');
                        });
                        })

                    }
                })
                .catch(collected =>{
                    message.channel.send('Timed Out.');
                });
                })
                
            } else if (message.content === 'dnd'){
                let filter = m => m.author.id === message.author.id
                message.channel.send('Which status type would you like? Your options are: Playing, Watching, Listening, Streaming.').then(()=>{
                message.channel.awaitMessages(filter,{
                max: 1,
                time: 30000,
                errors: ['time']
                })
                .then(message =>{
                    message = message.first()
                    if (message.content === 'Listening'){
                        let filter = m => m.author.id === message.author.id
                        message.channel.send('please do set and then your title.').then(()=>{
                        message.channel.awaitMessages(filter,{
                        max: 1,
                        time: 30000,
                        errors: ['time']
                        })
                        .then(message =>{
                            message = message.first()
                            if (message.content.startsWith("set")){
                                let sentence = message.content.split(" ");
                                sentence.shift();
                                sentence = sentence.join(" ");
                                client.user.setPresence({
                                    status: 'dnd',// can be set to "online","idle","dnd", and "invisible"
                                    activity: {
                                      name: sentence,
                                      type: "LISTENING" // can be set to "PLAYING","STREAMING","LISTENING", and "WATCHING"
                                    }
                                  });

                                message.channel.send(sentence + " was set.");
                                
                            }
                        })
                        .catch(collected =>{
                            message.channel.send('Timed Out.');
                        });
                        })
                    } else if (message.content === 'Playing'){
                        let filter = m => m.author.id === message.author.id
                        message.channel.send('please do set and then your title.').then(()=>{
                        message.channel.awaitMessages(filter,{
                        max: 1,
                        time: 30000,
                        errors: ['time']
                        })
                        .then(message =>{
                            message = message.first()
                            if (message.content.startsWith("set")){
                                let sentence = message.content.split(" ");
                                sentence.shift();
                                sentence = sentence.join(" ");
                                client.user.setPresence({
                                    status: 'dnd',// can be set to "online","idle","dnd", and "invisible"
                                    activity: {
                                      name: sentence,
                                      type: "PLAYING" // can be set to "PLAYING","STREAMING","LISTENING", and "WATCHING"
                                    }
                                  });

                                message.channel.send(sentence + " was set.");
                                
                            }
                        })
                        .catch(collected =>{
                            message.channel.send('Timed Out.');
                        });
                        })

                    } else if (message.content === 'Watching'){
                        let filter = m => m.author.id === message.author.id
                        message.channel.send('please do set and then your title.').then(()=>{
                        message.channel.awaitMessages(filter,{
                        max: 1,
                        time: 30000,
                        errors: ['time']
                        })
                        .then(message =>{
                            message = message.first()
                            if (message.content.startsWith("set")){
                                let sentence = message.content.split(" ");
                                sentence.shift();
                                sentence = sentence.join(" ");
                                client.user.setPresence({
                                    status: 'dnd',// can be set to "online","idle","dnd", and "invisible"
                                    activity: {
                                      name: sentence,
                                      type: "WATCHING" // can be set to "PLAYING","STREAMING","LISTENING", and "WATCHING"
                                    }
                                  });

                                message.channel.send(sentence + " was set.");
                                
                            }
                        })
                        .catch(collected =>{
                            message.channel.send('Timed Out.');
                        });
                        })

                    } else if (message.content === 'Streaming'){
                        let filter = m => m.author.id === message.author.id
                        message.channel.send('please do set and then your title.').then(()=>{
                        message.channel.awaitMessages(filter,{
                        max: 1,
                        time: 30000,
                        errors: ['time']
                        })
                        .then(message =>{
                            message = message.first()
                            if (message.content.startsWith("set")){
                                let sentence = message.content.split(" ");
                                sentence.shift();
                                sentence = sentence.join(" ");
                                client.user.setPresence({
                                    status: 'dnd',// can be set to "online","idle","dnd", and "invisible"
                                    activity: {
                                      name: sentence,
                                      type: "STREAMING" // can be set to "PLAYING","STREAMING","LISTENING", and "WATCHING"
                                    }
                                  });

                                message.channel.send(sentence + " was set.");
                                
                            }
                        })
                        .catch(collected =>{
                            message.channel.send('Timed Out.');
                        });
                        })

                    }
                })
                .catch(collected =>{
                    message.channel.send('Timed Out.');
                });
                })

            } else if (message.content === 'invisible'){
                client.user.setStatus('invisible');
                message.channel.send('Now set to invisble.');

            }

        })
        .catch(collected =>{
            message.channel.send('Timed Out.');
        });
        })
           

    }