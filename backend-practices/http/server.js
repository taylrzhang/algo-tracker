const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
  let{pathname} = new URL(req.url, 'http://localhost:3000');
	if(pathname === '/') {
		let html = fs.readFileSync(__dirname + '/public/index.html')
		res.end(html) 
	} else if(pathname === '/style.css') {
		let css = fs.readFileSync(__dirname + '/public/style.css')
		res.end(css)
	} else if(pathname === '/index.js') {
		let js = fs.readFileSync(__dirname + '/public/index.js')
		res.end(css)
	} else {
		res.statusCode = 404;
		res.end('not found')	
	}
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
})
