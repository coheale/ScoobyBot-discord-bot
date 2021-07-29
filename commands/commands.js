module.exports = {
    name: 'commands',
    description: 'prints a list of available commands for VikingBot',
    execute(message, args) {
        // sends message to channel with a list of all commands and their functions
        message.channel.send('cheese\ngaming');
    }
}