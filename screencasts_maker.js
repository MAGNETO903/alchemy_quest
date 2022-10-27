const { launch, getStream }  = require("puppeteer-stream");
const fs = require("fs");

const {
  performance
} = require('perf_hooks');

const DIR_URL = "snake_extra"

const file = fs.createWriteStream(DIR_URL + "/"+performance.now()+".mp4");
var streaming = false;

async function test() {
	const browser = await launch({
		defaultViewport: {
			width: 1280,
			height: 720,
		},
	});

	const page = await browser.newPage();
	await page.goto("http://localhost:3000");
	var stream;
	
	

	await page.exposeFunction('make_screenshot', (async () => {

        console.log('Interesting function has been called. Starting a screencast now.');
        if (streaming == false) {
        	console.log("recording");
        	stream = await getStream(page, { audio: true, video: true });
        	stream.pipe(file);
        	streaming = true
    	} else {
    		await stream.destroy();
			file.close();
			console.log("finished");
			streaming = false
    	}
        //return await save_screenshot(page);
    }));

	

}

test();