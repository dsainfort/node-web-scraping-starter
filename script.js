const request = require('request');
const cheerio = require('cheerio');

request('https://www.bloggingbasics101.com/how-do-i-start-a-blog/', (err, res, html) => {
	if(!err && res.statusCode == 200) {
		const $ = cheerio.load(html);
	
		$('#post-540').each((i, el) => {
			const title = $(el).find('.entry-header').text();
			console.log(title)

		});
		
	}
});
