
//require the discrod.js module
const Discord = require('discord.js');

//create a new Discord client
const client = new Discord.Client();

const prefix = '!';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles) {
    const command = require(`./commands/${file}`);
    // set a new item in the Collection
	// with the key as the command name and the value as the exported module
    client.commands.set(command.name, command);
}

//when the client is ready, run code
//this event will trigger one time after logging in
client.once('ready', () => {
    console.log('ScoobyBot is online!');
});

client.on('message', message => {
    
    //Checks if bot sent the message OR the message did not start with !
    if(!message.content.startsWith(prefix) || message.author.bot) {
        return;
    }

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    // mentions the user if a mention occurs in the message
    // const mention = message.mentions.users.first();
    // message.channel.send(`${mention} cheese`);

    if(command === 'ping') {
        client.commands.get('ping').execute(message, args);
    } else if (command === 'daddy' || command === "daddywatts") {
        client.commands.get('daddy').execute(message, args);
    } else if (command === 'shaggy') {
        client.commands.get('shaggy').execute(message, args);
    } else if (command === 'youtube') {
        client.commands.get('youtube').execute(message, args);
    } else if (command === 'commands') {
        client.commands.get('commands').execute(message, args);
    } else if (command === 'mod') {
        client.commands.get('mod').execute(message, args);
    } else if (command === 'removemod') {
        client.commands.get('removemod').execute(message, args);
    } else if (command === 'canban') {
        client.commands.get('canban').execute(message, args);
    } else if (command === 'glasgow') {
        client.commands.get('glasgowEmbed').execute(message, args, Discord);
    } else if (command === 'edinburgh') {
        client.commands.get('edinburghEmbed').execute(message, args, Discord);
    }


});


//END OF FILE
//login to Discord with your app's token
client.login('ODUzNTUyMzQ4MDA0ODc2MzA4.YMXCkg.av7Zf0IRYkW_3S9WT9zdSEh6U5E');

