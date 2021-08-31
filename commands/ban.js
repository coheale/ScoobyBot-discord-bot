module.exports = {
    name : 'ban',
    description : 'bans the given user',
    execute(message, args) {
        if(!message.member.permissions.has('BAN_MEMBERS')) {
            return message.reply('You do not have permission to ban users.');
            
        }

        const user = message.mentions.users.first();
        if(user) {
            const targUser = message.guild.members.cache.get(user.id);
            targUser.ban();
            message.channel.send(targUser.toString() + " User has been \`banned\`");
        } else {
            message.channel.send('Cannot ban the user provided.');
        }
    }
}