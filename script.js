const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const writeStream = fs.createWriteStream('post.csv');

request('https://www.bloggingbasics101.com/how-do-i-start-a-blog/', (err, res, html) => {
	if(!err && res.statusCode == 200) {
		const $ = cheerio.load(html);
	
		$('#post-540').each((i, el) => {
			const title = $(el).find('.entry-header').text().replace(/\s\s+/g, '');
			const content = $(el).find('.entry-content').text();
			
			writeStream.write(`${title}, ${content} \n`);

		});
		
		console.log('scraping done')
	}
});
