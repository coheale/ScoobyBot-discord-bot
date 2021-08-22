module.exports = {
    name : 'clear',
    description : 'Clears messages',
    async execute(message, args) {
        //checks to make sure the user has the MANAGE_MESSAGES ability
        if(message.member.permissions.has("MANAGE_MESSAGES")) {
            if(!args[0]) {
                return message.reply('You need to enter the amount of messages to delete');
            } else if(isNaN(args[0])) {
                return message.reply('You need to enter a real number as an argument');
            } else if(args[0] < 0 ) {
                return message.reply('You cannot clear less than 0 messages!');
            } else if(args[0] > 10) {
                return message.reply('You cannot clear more than 10 messages at once');
            } 
            
            //Grabs the most recent messages passed and deletes them
            await message.channel.messages.fetch({limit : ++args[0]}).then(messages => {
                message.channel.bulkDelete(messages);
            });
    
        } else {
            return message.reply('You need to be able to manage messages to use this command.');
        }
    }
}