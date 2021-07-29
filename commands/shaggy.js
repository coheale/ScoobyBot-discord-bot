module.exports = {
    name: 'shaggy',
    description: "do the swag",
    execute(message, args) {
        // sends message to channel consisting of provided provided link
        message.channel.send('https://pbs.twimg.com/media/DNfcOdpWAAYhDoo.jpg');
    }
}