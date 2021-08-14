module.exports = {
    name : 'glasgowEmbed',
    description : 'does the embedding for the city of Glasgow',
    execute(message, args, Discord) {
        const glasgowScotland = new Discord.MessageEmbed()
        .setColor('#99E6FF')
        .setTitle('GLASGOW')
        .setURL('https://en.wikipedia.org/wiki/Glasgow')
        .setDescription('This is an embed for the Glasgow Wikipedia Page')
        .addFields(
            {name : 'City Center:', value: 'Glasgow City Center'}
        )
        .setImage('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthenomadvisor.com%2Fwp-content%2Fuploads%2F2019%2F03%2Fwheretostayinglasgow.jpg&f=1&nofb=1')
        .setFooter('Glasgow is the largest city in Scotland');

        message.channel.send(glasgowScotland);
    }
}