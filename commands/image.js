var Scraper = require('images-scraper');

const google = new Scraper({
    puppeteer: {
        headless : true
    }
})

module.exports = {
    name : 'image',
    description : 'Searches for an image and posts to the chat',
    async execute(message, args){
        // Spence id: 361943375697412098
        // if(message.author.id === '361943375697412098') {
        //     return message.reply('You cannot use the image search function because you are lame');
        // }
        const image_search = args.join(' ');
        message.channel.send("Searching for first result of : " + image_search);
        if(!image_search) {
            return message.channel.send('Please enter an image to search for');
        }
        const image_results = await google.scrape(image_search, 1);
        message.channel.send(image_results[0].url);
        
    }
}