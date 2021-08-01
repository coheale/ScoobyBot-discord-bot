// Importing node js fs module
const fs = require('fs');

module.exports = {
    name: 'commands',
    description: 'prints a list of available commands for VikingBot',
    execute(message, args) {
        // Also works, but try catch loop is better
        // let content = fs.readFileSync('/Users/codyh/Desktop/Summer2021/discord-bot/commands/commands.txt', 'utf8');
        // message.channel.send(content);

        // Prints the commands.txt file to the chat, and prints any errors to the node js console
        try {
            let content = fs.readFileSync('./commands/commands.txt', 'utf8');
            // let content = fs.readFileSync('/Users/codyh/Desktop/Summer2021/discord-bot/commands/commands.txt', 'utf8');
            message.channel.send(content);
        } catch(err) {
            console.error(err);
        }
    }

}