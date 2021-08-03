module.exports = {
    name : 'canban',
    description : 'tells the user whether or not they have the permission to ban other users',
    execute(message, args) {
        if(message.member.permissions.has("BAN_MEMBERS")) {
            message.channel.send(`${message.author}`);
            message.channel.send('You have the permission to ban members');
            // message.channel.send(message.member);
        } else {
            message.channel.send(`${message.author}`);
            message.channel.send("You do **NOT** have the permission to ban members");
        }
    }
}