const { Guild } = require("discord.js");
const { execute } = require("./commands");

module.exports = {
    name : 'mod',
    description : 'sends a message to mod if the user is a mod',
    execute(message, args) {
        if(message.member.roles.cache.has('871461989166235719')) {
            message.channel.send('You are a mod!');
        } else {
            message.channel.send('You don\'t have the right permissions, we\'ll give it to you!');
            message.member.roles.add('871461989166235719');
            
        }
    }
} 