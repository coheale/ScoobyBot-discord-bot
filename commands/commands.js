const fs = require('fs');

module.exports = {
    name: 'commands',
    description: 'prints a list of available commands for VikingBot',
    execute(message, args) {
        // sends message to channel with a list of all commands and their functions
        let reader = new FileReader();
        let animal = "cheese";
        // message.channel.send("**COMMANDS:**\n!ping : responds with \"pong\" \n!daddy or !daddywatts : responds with daddywatts of course");
        message.channel.send(reader.readAsText("commands.txt"));
        message.channel.send(animal);
    }

}