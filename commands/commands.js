// Importing node js fs module
const { DiscordAPIError } = require('discord.js');
const fs = require('fs');

module.exports = {
    name: 'commands',
    description: 'prints a list of available commands for VikingBot',
    execute(message, args, Discord) {
        // Also works, but try catch loop is better
        // let content = fs.readFileSync('/Users/codyh/Desktop/Summer2021/discord-bot/commands/commands.txt', 'utf8');
        // message.channel.send(content);

        // Prints the commands.txt file to the chat, and prints any errors to the node js console
        
        
        try {
            let content = fs.readFileSync('./commands/commands.txt', 'utf8');
            // let content = fs.readFileSync('/Users/codyh/Desktop/Summer2021/discord-bot/commands/commands.txt', 'utf8');
            const allCommands = new Discord.MessageEmbed()
            .setColor('#99E6FF')
            .setTitle('COMMANDS')
            .setDescription('This is an embed displaying the commands of ScoobyBot')
            .addFields(
                {name : 'COMMANDS:', value : content},
                {name : 'WHO IS NOT THE BOSS:', value : 'Lars is NOT the boss'}
            )
            .setFooter('If you\'re reading this, high five!');
            message.channel.send(allCommands);
            // message.channel.send(content);
        } catch(err) {
            console.error(err);
        }
    }

}