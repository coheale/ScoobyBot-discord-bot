module.exports = {
    name: 'youtube',
    desription: "sends the youtube link!",
    execute(message, args) {
        message.channel.send('https://www.youtube.com/');
    }
}