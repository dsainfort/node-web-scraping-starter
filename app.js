const request = require('request');
const cheerio = require('cheerio');

request('https://firstsiteguide.com/examples-of-blogs/', (error, response, html) => {
	if(!error && response.statusCode == 200) {
		const $ = cheerio.load(html);

		const heading = $('.entry-header');
		// console.log(heading.html());
		// console.log(heading.text());
		const output = heading.find('h1').text();
		
	

		console.log(output);

	}
});
