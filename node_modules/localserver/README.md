# LocalServer - Static HTTP Server Utility

Version: `0.1.3`

License: [MIT](http://opensource.org/licenses/MIT)

Install: `npm install -g localserver`

## What is this?

This is a command line utility that will start a HTTP server to serve static files from current directory.

I wrote it so that I would have an easy to use static HTTP server when developing client-side code only. Obviously, it's not meant for production use.

You don't need to restart the server every time you make a file change, as it reads the requested files with each request.

*Note:* I am aware I could have implemented this using `connect`'s full featured static server instead, but I didn't. Why? For fun, of course!

## Usage

	Usage: localserver [options]
	
	  Options:
	  
    -h, --help           output usage information
    -V, --version        output the version number
    -p, --port [port]    Start static server on specified port. Defaults to "9000"
    --index [index]      Specify index file. Defaults to "index.html"
    --favicon [favicon]  If specified, will log a request to "/favicon.ico".

## TODO

- Ability to specify caching headers
- `.localserver.yml` config file support
