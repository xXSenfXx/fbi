const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NTMwNDM5NzY1NjcwMjMyMDg0.Dw_aoQ.RDH6WuEJIvAR4rt_gY0RwZHBgFU);//where BOT_TOKEN is the token of our bot
