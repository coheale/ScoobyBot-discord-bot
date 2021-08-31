module.exports = {
    name : 'kick',
    description : 'kicks a user',
    execute(message, args) {
        if(!message.member.permissions.has('KICK_MEMBERS')) {
            return message.reply('You do not have permission to kick users.');
            
        }

        const user = message.mentions.users.first();
        if(user) {
            const targUser = message.guild.members.cache.get(user.id);
            targUser.kick();
            message.channel.send(targUser.toString() + " User has been kicked");
        } else {
            message.channel.send('Cannot kick the user provided.');
        }
    }
}