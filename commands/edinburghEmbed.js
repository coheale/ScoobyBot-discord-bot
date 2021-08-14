module.exports = {
    name : 'edinburghEmbed',
    description : 'does the embedding for the City of Edinburgh',
    execute(message, args, Discord) {
        const edinburghScotland = new Discord.MessageEmbed()
        .setColor('#99E6FF')
        .setTitle('EDINBURGH')
        .setURL('https://en.wikipedia.org/wiki/Edinburgh')
        .setDescription('This is an embed for the City of Edinburgh Wikipedia Page')
        .addFields( 
            {name : 'Arthur\'s Seat:', value: 'A hill adjacent to Edinburgh'}
        )
        .setImage('https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Skyline_of_Edinburgh.jpg/1920px-Skyline_of_Edinburgh.jpg')
        .setFooter('Edinburgh is the capital city of Scotland!');

        message.channel.send(edinburghScotland);
    }
}