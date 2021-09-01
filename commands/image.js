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
        const image_search = args.join(' ');
        if(!image_search) {
            return message.channel.send('Please enter an image to search for');
        }
        const image_results = await google.scrape(image_search, 1);
        message.channel.send(image_results[0].url);
        
    }
}