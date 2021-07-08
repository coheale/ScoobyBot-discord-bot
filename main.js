
//require the discrod.js module
const Discord = require('discord.js');

//create a new Discord client
const client = new Discord.Client();

const prefix = '!';

//when the client is ready, run code
//this event will trigger one time after logging in
client.once('ready', () => {
    console.log('VikingBot is online!');
});

client.on('message', message => {
    
    //Checks if bot sent the message OR the message did not start with !
    if(!message.content.startsWith(prefix) || message.author.bot) {
        return;
    }

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping') {
        message.channel.send('pong!');
    } else if (command === 'daddy' || command === "daddywatts") {
        message.channel.send('https://cdn.discordapp.com/attachments/633370859389583372/850129403086110771/20210603_145034.jpg');
    } else if (command === 'shaggy') {
        message.channel.send('https://pbs.twimg.com/media/DNfcOdpWAAYhDoo.jpg');
    }


});


//END OF FILE
//login to Discord with your app's token
client.login('ODUzNTUyMzQ4MDA0ODc2MzA4.YMXCkg.av7Zf0IRYkW_3S9WT9zdSEh6U5E');

